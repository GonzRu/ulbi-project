import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/About";
import {MainPage} from "pages/Main";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <div className='page-wrapper'>
                <Routes>
                    {Object.values(routeConfig).map(({element, path}) =>

                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    )}
                </Routes>
            </div>
        </Suspense>
    );
};

export default AppRouter;
