import Auth from './Auth'
import Settings from './Settings'
import Student from './Student'
import Admin from './Admin'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
Settings: Object.assign(Settings, Settings),
Student: Object.assign(Student, Student),
Admin: Object.assign(Admin, Admin),
}

export default Controllers