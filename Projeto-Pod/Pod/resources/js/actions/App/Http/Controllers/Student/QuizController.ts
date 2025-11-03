import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
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
/**
* @see \App\Http\Controllers\Student\QuizController::meusQuizzes
 * @see app/Http/Controllers/Student/QuizController.php:69
 * @route '/app/myQuiz'
 */
export const meusQuizzes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: meusQuizzes.url(options),
    method: 'get',
})

meusQuizzes.definition = {
    methods: ["get","head"],
    url: '/app/myQuiz',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\QuizController::meusQuizzes
 * @see app/Http/Controllers/Student/QuizController.php:69
 * @route '/app/myQuiz'
 */
meusQuizzes.url = (options?: RouteQueryOptions) => {
    return meusQuizzes.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\QuizController::meusQuizzes
 * @see app/Http/Controllers/Student/QuizController.php:69
 * @route '/app/myQuiz'
 */
meusQuizzes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: meusQuizzes.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\QuizController::meusQuizzes
 * @see app/Http/Controllers/Student/QuizController.php:69
 * @route '/app/myQuiz'
 */
meusQuizzes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: meusQuizzes.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\QuizController::meusQuizzes
 * @see app/Http/Controllers/Student/QuizController.php:69
 * @route '/app/myQuiz'
 */
    const meusQuizzesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: meusQuizzes.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\QuizController::meusQuizzes
 * @see app/Http/Controllers/Student/QuizController.php:69
 * @route '/app/myQuiz'
 */
        meusQuizzesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: meusQuizzes.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\QuizController::meusQuizzes
 * @see app/Http/Controllers/Student/QuizController.php:69
 * @route '/app/myQuiz'
 */
        meusQuizzesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: meusQuizzes.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    meusQuizzes.form = meusQuizzesForm
/**
* @see \App\Http\Controllers\Student\QuizController::start
 * @see app/Http/Controllers/Student/QuizController.php:125
 * @route '/app/quiz/{quiz}/start'
 */
export const start = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/app/quiz/{quiz}/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Student\QuizController::start
 * @see app/Http/Controllers/Student/QuizController.php:125
 * @route '/app/quiz/{quiz}/start'
 */
start.url = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quiz: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { quiz: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    quiz: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        quiz: typeof args.quiz === 'object'
                ? args.quiz.id
                : args.quiz,
                }

    return start.definition.url
            .replace('{quiz}', parsedArgs.quiz.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\QuizController::start
 * @see app/Http/Controllers/Student/QuizController.php:125
 * @route '/app/quiz/{quiz}/start'
 */
start.post = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Student\QuizController::start
 * @see app/Http/Controllers/Student/QuizController.php:125
 * @route '/app/quiz/{quiz}/start'
 */
    const startForm = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Student\QuizController::start
 * @see app/Http/Controllers/Student/QuizController.php:125
 * @route '/app/quiz/{quiz}/start'
 */
        startForm.post = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(args, options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\Student\QuizController::answer
 * @see app/Http/Controllers/Student/QuizController.php:186
 * @route '/app/quiz/attempts/{attempt}/answer'
 */
export const answer = (args: { attempt: number | { id: number } } | [attempt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: answer.url(args, options),
    method: 'post',
})

answer.definition = {
    methods: ["post"],
    url: '/app/quiz/attempts/{attempt}/answer',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Student\QuizController::answer
 * @see app/Http/Controllers/Student/QuizController.php:186
 * @route '/app/quiz/attempts/{attempt}/answer'
 */
answer.url = (args: { attempt: number | { id: number } } | [attempt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attempt: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { attempt: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    attempt: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        attempt: typeof args.attempt === 'object'
                ? args.attempt.id
                : args.attempt,
                }

    return answer.definition.url
            .replace('{attempt}', parsedArgs.attempt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\QuizController::answer
 * @see app/Http/Controllers/Student/QuizController.php:186
 * @route '/app/quiz/attempts/{attempt}/answer'
 */
answer.post = (args: { attempt: number | { id: number } } | [attempt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: answer.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Student\QuizController::answer
 * @see app/Http/Controllers/Student/QuizController.php:186
 * @route '/app/quiz/attempts/{attempt}/answer'
 */
    const answerForm = (args: { attempt: number | { id: number } } | [attempt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: answer.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Student\QuizController::answer
 * @see app/Http/Controllers/Student/QuizController.php:186
 * @route '/app/quiz/attempts/{attempt}/answer'
 */
        answerForm.post = (args: { attempt: number | { id: number } } | [attempt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: answer.url(args, options),
            method: 'post',
        })
    
    answer.form = answerForm
/**
* @see \App\Http\Controllers\Student\QuizController::finish
 * @see app/Http/Controllers/Student/QuizController.php:238
 * @route '/app/quiz/attempts/{attempt}/finish'
 */
export const finish = (args: { attempt: number | { id: number } } | [attempt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: finish.url(args, options),
    method: 'post',
})

finish.definition = {
    methods: ["post"],
    url: '/app/quiz/attempts/{attempt}/finish',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Student\QuizController::finish
 * @see app/Http/Controllers/Student/QuizController.php:238
 * @route '/app/quiz/attempts/{attempt}/finish'
 */
finish.url = (args: { attempt: number | { id: number } } | [attempt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attempt: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { attempt: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    attempt: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        attempt: typeof args.attempt === 'object'
                ? args.attempt.id
                : args.attempt,
                }

    return finish.definition.url
            .replace('{attempt}', parsedArgs.attempt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\QuizController::finish
 * @see app/Http/Controllers/Student/QuizController.php:238
 * @route '/app/quiz/attempts/{attempt}/finish'
 */
finish.post = (args: { attempt: number | { id: number } } | [attempt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: finish.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Student\QuizController::finish
 * @see app/Http/Controllers/Student/QuizController.php:238
 * @route '/app/quiz/attempts/{attempt}/finish'
 */
    const finishForm = (args: { attempt: number | { id: number } } | [attempt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: finish.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Student\QuizController::finish
 * @see app/Http/Controllers/Student/QuizController.php:238
 * @route '/app/quiz/attempts/{attempt}/finish'
 */
        finishForm.post = (args: { attempt: number | { id: number } } | [attempt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: finish.url(args, options),
            method: 'post',
        })
    
    finish.form = finishForm
const QuizController = { index, meusQuizzes, start, answer, finish }

export default QuizController