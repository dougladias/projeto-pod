import DashboardController from './DashboardController'
import QuizController from './QuizController'
import RankingController from './RankingController'
import ProfileController from './ProfileController'
const Student = {
    DashboardController: Object.assign(DashboardController, DashboardController),
QuizController: Object.assign(QuizController, QuizController),
RankingController: Object.assign(RankingController, RankingController),
ProfileController: Object.assign(ProfileController, ProfileController),
}

export default Student