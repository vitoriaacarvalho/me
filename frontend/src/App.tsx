import { Sidebar } from './components/Sidebar'
import { StatusBar } from './components/StatusBar'
import { useRoute, type RouteId } from './routes'
import { Contact } from './sections/Contact'
import { Cv } from './sections/Cv'
import { Posts } from './sections/Posts'
import { Projects } from './sections/Projects'
import { WhoAmI } from './sections/WhoAmI'

const sections: Record<RouteId, () => React.JSX.Element> = {
  who: WhoAmI,
  posts: Posts,
  projects: Projects,
  cv: Cv,
  contact: Contact,
}

export default function App() {
  const route = useRoute()
  const Section = sections[route.id]

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar current={route.id} />
        <main className="main">
          <div className="main__inner">
            <Section />
          </div>
        </main>
      </div>
      <StatusBar path={route.path} />
    </div>
  )
}
