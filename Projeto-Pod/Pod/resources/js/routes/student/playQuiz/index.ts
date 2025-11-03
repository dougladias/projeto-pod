import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Student\QuizController::index
 * @see app/Http/Controllers/Student/QuizController.php:20
 * @route '/app/playQuiz'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/playQuiz',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\QuizController::index
 * @see app/Http/Controllers/Student/QuizController.php:20
 * @route '/app/playQuiz'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\QuizController::index
 * @see app/Http/Controllers/Student/QuizController.php:20
 * @route '/app/playQuiz'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\QuizController::index
 * @see app/Http/Controllers/Student/QuizController.php:20
 * @route '/app/playQuiz'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\QuizController::index
 * @see app/Http/Controllers/Student/QuizController.php:20
 * @route '/app/playQuiz'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\QuizController::index
 * @see app/Http/Controllers/Student/QuizController.php:20
 * @route '/app/playQuiz'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\QuizController::index
 * @see app/Http/Controllers/Student/QuizController.php:20
 * @route '/app/playQuiz'
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
const playQuiz = {
    index: Object.assign(index, index),
}

export default playQuiz