import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import playQuiz from './playQuiz'
import myQuiz from './myQuiz'
import quiz from './quiz'
import ranking from './ranking'
import profile from './profile'
/**
* @see \App\Http\Controllers\Student\DashboardController::dashboard
 * @see app/Http/Controllers/Student/DashboardController.php:20
 * @route '/app/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/app/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\DashboardController::dashboard
 * @see app/Http/Controllers/Student/DashboardController.php:20
 * @route '/app/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\DashboardController::dashboard
 * @see app/Http/Controllers/Student/DashboardController.php:20
 * @route '/app/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\DashboardController::dashboard
 * @see app/Http/Controllers/Student/DashboardController.php:20
 * @route '/app/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\DashboardController::dashboard
 * @see app/Http/Controllers/Student/DashboardController.php:20
 * @route '/app/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\DashboardController::dashboard
 * @see app/Http/Controllers/Student/DashboardController.php:20
 * @route '/app/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\DashboardController::dashboard
 * @see app/Http/Controllers/Student/DashboardController.php:20
 * @route '/app/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
const student = {
    dashboard: Object.assign(dashboard, dashboard),
playQuiz: Object.assign(playQuiz, playQuiz),
myQuiz: Object.assign(myQuiz, myQuiz),
quiz: Object.assign(quiz, quiz),
ranking: Object.assign(ranking, ranking),
profile: Object.assign(profile, profile),
}

export default student