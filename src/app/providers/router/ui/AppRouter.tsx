import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/About";
import {MainPage} from "pages/Main";
import {routeConfig} from "shared/config/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) =>
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                )}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
