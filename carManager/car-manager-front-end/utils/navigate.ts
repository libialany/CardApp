import Router from 'next/router';
interface navigateLink {
  link: string;
}
export const navigate = (param: navigateLink) => {
  Router.push(param.link);
};
