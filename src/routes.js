import About from './components/About.vue'
import Home from './components/Home.vue'
import Influencers from './components/Influencers.vue'
import Partners from './components/Partners.vue'
import Terms from './components/Terms.vue'
import HowItWorks from './components/HowItWorks.vue'
import Giver from './components/Giver.vue'
import Monica from './components/Monica.vue'

export const routes = [
  { path: '', component: Home },
  { path: '/about', component: About },
  { path: '/influencers', component: Influencers },
  { path: '/partners', component: Partners },
  { path: '/terms', component: Terms },
  { path: '/howitworks', component: HowItWorks },
  { path: '/giver', component: Giver },
  { path: '/monica', component: Monica }

]
