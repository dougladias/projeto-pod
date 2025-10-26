<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Show the student dashboard.
     */
    public function index(): Response
    {
        return Inertia::render('student/dashboard/index');
    }
}
