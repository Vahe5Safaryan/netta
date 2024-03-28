import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound";
import Layout from "./components/Layout/Layout";
import {Provider} from "react-redux";
import store from "./store/store";
import Category from "./Pages/Category";
import './i18n';

function App() {
    return (
        <>
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={ <Layout/> }>
                        <Route index  element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/categories/:id" element={<Category />}/>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Provider>

        </>
    );
}

export default App;
