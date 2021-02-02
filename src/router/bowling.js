import GalleryDetail from '../views/bowling/gallery/GalleryDetail.vue';
import GalleryForm from '../views/bowling/gallery/GalleryForm.vue';
import GalleryList from '../views/bowling/gallery/GalleryList.vue';
import AlleyList from '../views/bowling/alley/AlleyList.vue';

const bowling = [
  {
    path: '/bowling/gallery/list',
    name: 'Gallery',
    component: GalleryList,
  },
  {
    path: '/bowling/gallery/detail/:id',
    name: 'GalleryDetail',
    component: GalleryDetail,
  },
  {
    path: '/bowling/gallery/form',
    name: 'GalleryForm',
    component: GalleryForm,
  },
  {
    path: '/bowling/alley/list',
    name: 'AlleyList',
    component: AlleyList,
  },
];

export default bowling;
