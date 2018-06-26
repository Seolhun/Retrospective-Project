
import HomeView from '../container/home/HomeView';
import TableScrollView from '../container/table/TableScrollView';
import TablePaginationView from '../container/table/TablePaginationView';

import BasicContainer from '../container/comparison/component/BasicContainer';
import PureContainer from '../container/comparison/component/PureContainer';
import FunctionalContainer from '../container/comparison/component/FunctionalContainer';

import BasicRxjsContainer from '../container/rxjs/BasicRxjsContainer';
import ObservableEventFilterContainer from '../container/rxjs/ObservableEventFilterContainer';

import LifeCycleComponent from '../container/lifecycle/LifeCycleComponent';

import NotFoundView from '../container/common/NotFoundView'

const routes = [
	routeCreator({ type: 0, color: 'primary', path: '/', label: 'Home', component: HomeView }),
	// Comparison Function in React
	routeCreator({ type: 1, color: 'success', path: '/comparison/basic', label: 'BasicComponent', component: BasicContainer }),
	routeCreator({ type: 1, color: 'success', path: '/comparison/pure', label: 'PureComponent', component: PureContainer }),
	routeCreator({ type: 1, color: 'success', path: '/comparison/functional', label: 'FunctionalComponent', component: FunctionalContainer }),
	// Example Component
	routeCreator({ type: 2, color: 'info', path: '/table/pagination', label: 'TablePagination', component: TableScrollView }),
	routeCreator({ type: 2, color: 'info', path: '/table/scroll', label: 'TableScroll', component: TablePaginationView }),
	// RxJS
	routeCreator({ type: 3, color: 'primary', path: '/rxjs/basic', label: 'BasicRxjsContainer', component: BasicRxjsContainer }),
	routeCreator({ type: 3, color: 'primary', path: '/rxjs/filter', label: 'ObservableEventFilterContainer', component: ObservableEventFilterContainer }),
	// LifeCycle
	routeCreator({ type: 0, color: 'primary', path: '/lifecycle', label: 'LifeCycleComponent', component: LifeCycleComponent }),
	// Error
	routeCreator({ type: 0, color: 'warning', path: '*', exact: false, label: 'NotFoundView', component: NotFoundView }),
]

function routeCreator({ type, color, path, label, exact = true, onEnter = () => null, component= () => {} }) {
	return {
		type,
		color,
		path,
		label,
		exact,
		onEnter,
		component,
	}
}

export default routes;