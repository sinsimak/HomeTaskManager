import AppService from './modules/app.service';
import {config} from './modules/config';
import './modules/header.component';
import './css/index.css';
import './less/index.less';
import './scss/index.scss';
import './modules/ts.module';

console.log('Config key:', config.key);

const  service = new AppService('Hello, Vitaly');
service.log();
