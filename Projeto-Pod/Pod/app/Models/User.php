<?php

namespace App\Models;

use App\Notifications\ResetPasswordNotification;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * User role constants.
     */
    const ROLE_ADMIN = 'admin';
    const ROLE_STUDENT = 'aluno';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'school',
        'birth_date',
        'cpf',
        'school_year',
        'gender',
        'language',
        'phone',
        'avatar',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
            'birth_date' => 'date',
        ];
    }

    /**
     * Get all quiz attempts for this user.
     */
    public function quizAttempts(): HasMany
    {
        return $this->hasMany(QuizAttempt::class);
    }

    /**
     * Get all achievements for this user.
     */
    public function achievements(): BelongsToMany
    {
        return $this->belongsToMany(Achievement::class, 'user_achievements')
                    ->withPivot('unlocked_at')
                    ->withTimestamps();
    }

    /**
     * Get the user achievements (pivot records).
     */
    public function userAchievements(): HasMany
    {
        return $this->hasMany(UserAchievement::class);
    }

    /**
     * Check if user is admin.
     */
    public function isAdmin(): bool
    {
        return $this->role === self::ROLE_ADMIN;
    }

    /**
     * Check if user is student.
     */
    public function isStudent(): bool
    {
        return $this->role === self::ROLE_STUDENT;
    }

    /**
     * Get total points earned by this user.
     */
    public function getTotalPointsAttribute(): int
    {
        return $this->quizAttempts()
                    ->whereNotNull('completed_at')
                    ->sum('score');
    }

    /**
     * Get total completed quizzes.
     */
    public function getTotalCompletedQuizzesAttribute(): int
    {
        return $this->quizAttempts()
                    ->whereNotNull('completed_at')
                    ->count();
    }

    /**
     * Get average accuracy across all completed quizzes.
     */
    public function getAverageAccuracyAttribute(): float
    {
        return $this->quizAttempts()
                    ->whereNotNull('completed_at')
                    ->avg('accuracy') ?? 0;
    }

    /**
     * Get user ranking based on total points.
     */
    public function getRankingPositionAttribute(): int
    {
        return self::where('role', self::ROLE_STUDENT)
                   ->get()
                   ->sortByDesc(fn($user) => $user->total_points)
                   ->search(fn($user) => $user->id === $this->id) + 1;
    }

    /**
     * Send the password reset notification.
     */
    public function sendPasswordResetNotification($token): void
    {
        $this->notify(new ResetPasswordNotification($token));
    }
}
