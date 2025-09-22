import { 
    AppRoute,
    getRouteIndex,
    getRouteLogin,
} from "@/consts/routes";
import { Index } from "@/pages/Index";

import { RouteProps } from "react-router-dom";

export const routeConfig : Record<AppRoute, AppRouteProps> = {
    [AppRoute.INDEX]: {
        path: getRouteIndex(),
        element: <Index/>,
        authOnly: true,
    },
    [AppRoute.LOGIN] : {
        path: getRouteLogin(),
        element: <></>,
        authOnly: false,
    }
};

export type AppRouteProps = RouteProps & { authOnly?: boolean };