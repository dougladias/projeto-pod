<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PerguntaController;
use App\Http\Controllers\Admin\QuizController;
use App\Http\Controllers\Admin\ReportController;
use App\Http\Controllers\Admin\StudentController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'admin'])->prefix('backoffice')->name('admin.')->group(function () {
    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Students management
    Route::get('/students', [StudentController::class, 'index'])->name('students.index');
    Route::get('/students/{student}', [StudentController::class, 'show'])->name('students.show');
    Route::put('/students/{student}', [StudentController::class, 'update'])->name('students.update');
    Route::delete('/students/{student}', [StudentController::class, 'destroy'])->name('students.destroy');
    Route::get('/students-statistics', [StudentController::class, 'statistics'])->name('students.statistics');

    // Quizzes management
    Route::get('/quizzes', [QuizController::class, 'index'])->name('quizzes.index');
    Route::get('/quizzes/create', [QuizController::class, 'create'])->name('quizzes.create');
    Route::post('/quizzes', [QuizController::class, 'store'])->name('quizzes.store');
    Route::get('/quizzes/{quiz}', [QuizController::class, 'show'])->name('quizzes.show');
    Route::get('/quizzes/{quiz}/edit', [QuizController::class, 'edit'])->name('quizzes.edit');
    Route::put('/quizzes/{quiz}', [QuizController::class, 'update'])->name('quizzes.update');
    Route::delete('/quizzes/{quiz}', [QuizController::class, 'destroy'])->name('quizzes.destroy');
    Route::post('/quizzes/{quiz}/toggle-active', [QuizController::class, 'toggleActive'])->name('quizzes.toggle-active');
    Route::post('/quizzes/{quiz}/duplicate', [QuizController::class, 'duplicate'])->name('quizzes.duplicate');

    // Perguntas management
    Route::get('/perguntas', [PerguntaController::class, 'index'])->name('perguntas.index');
    Route::get('/perguntas/create', [PerguntaController::class, 'create'])->name('perguntas.create');
    Route::post('/perguntas', [PerguntaController::class, 'store'])->name('perguntas.store');
    Route::get('/perguntas/{pergunta}', [PerguntaController::class, 'show'])->name('perguntas.show');
    Route::get('/perguntas/{pergunta}/edit', [PerguntaController::class, 'edit'])->name('perguntas.edit');
    Route::put('/perguntas/{pergunta}', [PerguntaController::class, 'update'])->name('perguntas.update');
    Route::delete('/perguntas/{pergunta}', [PerguntaController::class, 'destroy'])->name('perguntas.destroy');
    Route::get('/perguntas-statistics', [PerguntaController::class, 'statistics'])->name('perguntas.statistics');

    // Reports
    Route::get('/reports', [ReportController::class, 'index'])->name('reports.index');
    Route::get('/reports/overview', [ReportController::class, 'overview'])->name('reports.overview');
    Route::get('/reports/students', [ReportController::class, 'students'])->name('reports.students');
    Route::get('/reports/quizzes', [ReportController::class, 'quizzes'])->name('reports.quizzes');
    Route::get('/reports/performance', [ReportController::class, 'performanceByCategory'])->name('reports.performance');
    Route::get('/reports/engagement', [ReportController::class, 'engagement'])->name('reports.engagement');
    Route::get('/reports/export', [ReportController::class, 'export'])->name('reports.export');
});
