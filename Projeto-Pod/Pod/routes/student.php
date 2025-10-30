<?php

use App\Http\Controllers\Student\DashboardController;
use App\Http\Controllers\Student\QuizController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'student'])->prefix('app')->name('student.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Quiz routes
    Route::get('/playQuiz', [QuizController::class, 'index'])->name('playQuiz.index');
    Route::get('/myQuiz', [QuizController::class, 'meusQuizzes'])->name('myQuiz.index');
    Route::post('/quiz/{quiz}/start', [QuizController::class, 'start'])->name('quiz.start');
    Route::post('/quiz/attempts/{attempt}/answer', [QuizController::class, 'answer'])->name('quiz.answer');
    Route::post('/quiz/attempts/{attempt}/finish', [QuizController::class, 'finish'])->name('quiz.finish');
});
