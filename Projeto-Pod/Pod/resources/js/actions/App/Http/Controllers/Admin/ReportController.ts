import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ReportController::index
 * @see app/Http/Controllers/Admin/ReportController.php:20
 * @route '/backoffice/reports'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backoffice/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportController::index
 * @see app/Http/Controllers/Admin/ReportController.php:20
 * @route '/backoffice/reports'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportController::index
 * @see app/Http/Controllers/Admin/ReportController.php:20
 * @route '/backoffice/reports'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportController::index
 * @see app/Http/Controllers/Admin/ReportController.php:20
 * @route '/backoffice/reports'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportController::index
 * @see app/Http/Controllers/Admin/ReportController.php:20
 * @route '/backoffice/reports'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportController::index
 * @see app/Http/Controllers/Admin/ReportController.php:20
 * @route '/backoffice/reports'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportController::index
 * @see app/Http/Controllers/Admin/ReportController.php:20
 * @route '/backoffice/reports'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\ReportController::overview
 * @see app/Http/Controllers/Admin/ReportController.php:36
 * @route '/backoffice/reports/overview'
 */
export const overview = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})

overview.definition = {
    methods: ["get","head"],
    url: '/backoffice/reports/overview',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportController::overview
 * @see app/Http/Controllers/Admin/ReportController.php:36
 * @route '/backoffice/reports/overview'
 */
overview.url = (options?: RouteQueryOptions) => {
    return overview.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportController::overview
 * @see app/Http/Controllers/Admin/ReportController.php:36
 * @route '/backoffice/reports/overview'
 */
overview.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overview.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportController::overview
 * @see app/Http/Controllers/Admin/ReportController.php:36
 * @route '/backoffice/reports/overview'
 */
overview.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: overview.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportController::overview
 * @see app/Http/Controllers/Admin/ReportController.php:36
 * @route '/backoffice/reports/overview'
 */
    const overviewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: overview.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportController::overview
 * @see app/Http/Controllers/Admin/ReportController.php:36
 * @route '/backoffice/reports/overview'
 */
        overviewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: overview.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportController::overview
 * @see app/Http/Controllers/Admin/ReportController.php:36
 * @route '/backoffice/reports/overview'
 */
        overviewForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: overview.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    overview.form = overviewForm
/**
* @see \App\Http\Controllers\Admin\ReportController::students
 * @see app/Http/Controllers/Admin/ReportController.php:97
 * @route '/backoffice/reports/students'
 */
export const students = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: students.url(options),
    method: 'get',
})

students.definition = {
    methods: ["get","head"],
    url: '/backoffice/reports/students',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportController::students
 * @see app/Http/Controllers/Admin/ReportController.php:97
 * @route '/backoffice/reports/students'
 */
students.url = (options?: RouteQueryOptions) => {
    return students.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportController::students
 * @see app/Http/Controllers/Admin/ReportController.php:97
 * @route '/backoffice/reports/students'
 */
students.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: students.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportController::students
 * @see app/Http/Controllers/Admin/ReportController.php:97
 * @route '/backoffice/reports/students'
 */
students.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: students.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportController::students
 * @see app/Http/Controllers/Admin/ReportController.php:97
 * @route '/backoffice/reports/students'
 */
    const studentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: students.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportController::students
 * @see app/Http/Controllers/Admin/ReportController.php:97
 * @route '/backoffice/reports/students'
 */
        studentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: students.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportController::students
 * @see app/Http/Controllers/Admin/ReportController.php:97
 * @route '/backoffice/reports/students'
 */
        studentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: students.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    students.form = studentsForm
/**
* @see \App\Http\Controllers\Admin\ReportController::quizzes
 * @see app/Http/Controllers/Admin/ReportController.php:141
 * @route '/backoffice/reports/quizzes'
 */
export const quizzes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: quizzes.url(options),
    method: 'get',
})

quizzes.definition = {
    methods: ["get","head"],
    url: '/backoffice/reports/quizzes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportController::quizzes
 * @see app/Http/Controllers/Admin/ReportController.php:141
 * @route '/backoffice/reports/quizzes'
 */
quizzes.url = (options?: RouteQueryOptions) => {
    return quizzes.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportController::quizzes
 * @see app/Http/Controllers/Admin/ReportController.php:141
 * @route '/backoffice/reports/quizzes'
 */
quizzes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: quizzes.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportController::quizzes
 * @see app/Http/Controllers/Admin/ReportController.php:141
 * @route '/backoffice/reports/quizzes'
 */
quizzes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: quizzes.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportController::quizzes
 * @see app/Http/Controllers/Admin/ReportController.php:141
 * @route '/backoffice/reports/quizzes'
 */
    const quizzesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: quizzes.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportController::quizzes
 * @see app/Http/Controllers/Admin/ReportController.php:141
 * @route '/backoffice/reports/quizzes'
 */
        quizzesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: quizzes.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportController::quizzes
 * @see app/Http/Controllers/Admin/ReportController.php:141
 * @route '/backoffice/reports/quizzes'
 */
        quizzesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: quizzes.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    quizzes.form = quizzesForm
/**
* @see \App\Http\Controllers\Admin\ReportController::performanceByCategory
 * @see app/Http/Controllers/Admin/ReportController.php:182
 * @route '/backoffice/reports/performance'
 */
export const performanceByCategory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: performanceByCategory.url(options),
    method: 'get',
})

performanceByCategory.definition = {
    methods: ["get","head"],
    url: '/backoffice/reports/performance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportController::performanceByCategory
 * @see app/Http/Controllers/Admin/ReportController.php:182
 * @route '/backoffice/reports/performance'
 */
performanceByCategory.url = (options?: RouteQueryOptions) => {
    return performanceByCategory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportController::performanceByCategory
 * @see app/Http/Controllers/Admin/ReportController.php:182
 * @route '/backoffice/reports/performance'
 */
performanceByCategory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: performanceByCategory.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportController::performanceByCategory
 * @see app/Http/Controllers/Admin/ReportController.php:182
 * @route '/backoffice/reports/performance'
 */
performanceByCategory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: performanceByCategory.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportController::performanceByCategory
 * @see app/Http/Controllers/Admin/ReportController.php:182
 * @route '/backoffice/reports/performance'
 */
    const performanceByCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: performanceByCategory.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportController::performanceByCategory
 * @see app/Http/Controllers/Admin/ReportController.php:182
 * @route '/backoffice/reports/performance'
 */
        performanceByCategoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: performanceByCategory.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportController::performanceByCategory
 * @see app/Http/Controllers/Admin/ReportController.php:182
 * @route '/backoffice/reports/performance'
 */
        performanceByCategoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: performanceByCategory.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    performanceByCategory.form = performanceByCategoryForm
/**
* @see \App\Http\Controllers\Admin\ReportController::engagement
 * @see app/Http/Controllers/Admin/ReportController.php:225
 * @route '/backoffice/reports/engagement'
 */
export const engagement = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: engagement.url(options),
    method: 'get',
})

engagement.definition = {
    methods: ["get","head"],
    url: '/backoffice/reports/engagement',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportController::engagement
 * @see app/Http/Controllers/Admin/ReportController.php:225
 * @route '/backoffice/reports/engagement'
 */
engagement.url = (options?: RouteQueryOptions) => {
    return engagement.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportController::engagement
 * @see app/Http/Controllers/Admin/ReportController.php:225
 * @route '/backoffice/reports/engagement'
 */
engagement.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: engagement.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportController::engagement
 * @see app/Http/Controllers/Admin/ReportController.php:225
 * @route '/backoffice/reports/engagement'
 */
engagement.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: engagement.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportController::engagement
 * @see app/Http/Controllers/Admin/ReportController.php:225
 * @route '/backoffice/reports/engagement'
 */
    const engagementForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: engagement.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportController::engagement
 * @see app/Http/Controllers/Admin/ReportController.php:225
 * @route '/backoffice/reports/engagement'
 */
        engagementForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: engagement.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportController::engagement
 * @see app/Http/Controllers/Admin/ReportController.php:225
 * @route '/backoffice/reports/engagement'
 */
        engagementForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: engagement.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    engagement.form = engagementForm
/**
* @see \App\Http\Controllers\Admin\ReportController::exportMethod
 * @see app/Http/Controllers/Admin/ReportController.php:293
 * @route '/backoffice/reports/export'
 */
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/backoffice/reports/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ReportController::exportMethod
 * @see app/Http/Controllers/Admin/ReportController.php:293
 * @route '/backoffice/reports/export'
 */
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ReportController::exportMethod
 * @see app/Http/Controllers/Admin/ReportController.php:293
 * @route '/backoffice/reports/export'
 */
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ReportController::exportMethod
 * @see app/Http/Controllers/Admin/ReportController.php:293
 * @route '/backoffice/reports/export'
 */
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ReportController::exportMethod
 * @see app/Http/Controllers/Admin/ReportController.php:293
 * @route '/backoffice/reports/export'
 */
    const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: exportMethod.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ReportController::exportMethod
 * @see app/Http/Controllers/Admin/ReportController.php:293
 * @route '/backoffice/reports/export'
 */
        exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ReportController::exportMethod
 * @see app/Http/Controllers/Admin/ReportController.php:293
 * @route '/backoffice/reports/export'
 */
        exportMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: exportMethod.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    exportMethod.form = exportMethodForm
const ReportController = { index, overview, students, quizzes, performanceByCategory, engagement, exportMethod, export: exportMethod }

export default ReportController