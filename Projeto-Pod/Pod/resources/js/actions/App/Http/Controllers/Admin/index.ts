import DashboardController from './DashboardController'
import StudentController from './StudentController'
import QuizController from './QuizController'
import PerguntaController from './PerguntaController'
import ReportController from './ReportController'
const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
StudentController: Object.assign(StudentController, StudentController),
QuizController: Object.assign(QuizController, QuizController),
PerguntaController: Object.assign(PerguntaController, PerguntaController),
ReportController: Object.assign(ReportController, ReportController),
}

export default Admin