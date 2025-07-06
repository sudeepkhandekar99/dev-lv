// Pages and Components
import Landing from '../pages/';
import Navbar from '../components/Navbar';
import Single from '../pages/blog/Single';
import Blog1 from '../pages/blog/Blog1';
import Blog2 from '../pages/blog/Blog2';
import Blog3 from '../pages/blog/Blog3';
import Blog4 from '../pages/blog/Blog4';
import Blog5 from '../pages/blog/Blog5';
import Blog6 from '../pages/blog/Blog6';
import Footer from '../pages/Footer';
import Blog from '../pages/blog/Blog';
import NotableProjects from '../pages/sections/ NotableProjects';
import FactoryAutomation from '../pages/blog/FactoryAutomation';
import First from '../pages/blog/First';
import Second from '../pages/blog/Second';
import Third from '../pages/blog/Third';
import Products from '../pages/products/Products';
import Brands from '../pages/products/Brands';
import ProductCategory from '../pages/products/ProductCategory';
import ProductSubCategory from '../pages/products/ProductSubCategory';
import ProductDetails from '../pages/products/ProductDetails';

// ------------------

/**
 * Render Navigation bar when rendering a component and isLanding to check
 * if the component to be rendered is the landing page or not.
 *
 * In landing page case: nav links works as scrollable links
 * other case(such as : blog): nav links works as router links
 *
 * @param component the component to be rendered
 * @param isLanding check for a component if its the landingpage
 * @returns the given component with the Navbar
 */
const renderWithNav = (
  component: JSX.Element,
  isLanding: boolean
): JSX.Element => {
  return (
    <>
      <Navbar isLanding={isLanding} />
      {component}
      <Footer />
    </>
  );
};

type RoutesType = {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
};

// Routes we will visit
const routes: RoutesType[] = [
  {
    path: '/',
    element: renderWithNav(<Landing />, true),
  },
  {
    path: '/single',
    element: renderWithNav(<Single />, false),
  },
  {
    path: '/blog-1',
    element: renderWithNav(<Blog1 />, false),
  },
  {
    path: '/blog-2',
    element: renderWithNav(<Blog2 />, false),
  },
  {
    path: '/blog-3',
    element: renderWithNav(<Blog3 />, false),
  },
  {
    path: '/blog-4',
    element: renderWithNav(<Blog4 />, false),
  },
  {
    path: '/blog-5',
    element: renderWithNav(<Blog5 />, false),
  },
  {
    path: '/blog-6',
    element: renderWithNav(<Blog6 />, false),
  },
  {
    path: '/blog',
    element: renderWithNav(<Blog />, false),
  },
  {
    path: '/notable-projects',
    element: renderWithNav(<NotableProjects />, false),
  },
  {
    path: '/first',
    element: renderWithNav(<First />, false),
  },
  {
    path: '/second',
    element: renderWithNav(<Second />, false),
  },
  {
    path: '/third',
    element: renderWithNav(<Third />, false),
  },
  {
    path: '/products',
    element: renderWithNav(<Products />, false),
  },
  {
    path: '/product-category',
    element: renderWithNav(<ProductCategory />, false),
  },
  {
    path: '/product-subcategory',
    element: renderWithNav(<ProductSubCategory />, false),
  },
  {
    path: '/brands',
    element: renderWithNav(<Brands />, false),
  },
  {
    path: '/product-details/:id',
    element: renderWithNav(<ProductDetails />, false),
  },
];

export default routes;

// ---------------
