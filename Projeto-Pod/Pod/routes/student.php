<?php

use App\Http\Controllers\Student\DashboardController;
use App\Http\Controllers\Student\ProfileController;
use App\Http\Controllers\Student\QuizController;
use App\Http\Controllers\Student\RankingController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'student'])->prefix('app')->name('student.')->group(function () {
    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Quiz routes
    Route::get('/playQuiz', [QuizController::class, 'index'])->name('playQuiz.index');
    Route::get('/myQuiz', [QuizController::class, 'meusQuizzes'])->name('myQuiz.index');
    Route::post('/quiz/{quiz}/start', [QuizController::class, 'start'])->name('quiz.start');
    Route::post('/quiz/attempts/{attempt}/answer', [QuizController::class, 'answer'])->name('quiz.answer');
    Route::post('/quiz/attempts/{attempt}/finish', [QuizController::class, 'finish'])->name('quiz.finish');

    // Ranking routes
    Route::get('/ranking', [RankingController::class, 'index'])->name('ranking.index');
    Route::get('/ranking/data', [RankingController::class, 'getRanking'])->name('ranking.data');

    // Profile routes
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::get('/profile/progress', [ProfileController::class, 'getProgress'])->name('profile.progress');
    Route::get('/profile/achievements', [ProfileController::class, 'getAchievements'])->name('profile.achievements');
    Route::get('/profile/recommendations', [ProfileController::class, 'getRecommendations'])->name('profile.recommendations');
});
