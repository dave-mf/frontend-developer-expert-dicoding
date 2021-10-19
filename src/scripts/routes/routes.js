import RestoList from '../views/pages/resto-list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': RestoList, // default page
  '/resto-list': RestoList,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
