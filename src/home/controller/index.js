'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        return this.display();
    }
    foundationAction() {
        //auto render template file index_index.html
        return this.display();
    }

    async loginAction(){

        let self = this;
        if(this.isPost()){
            console.log('POST')
            let name = this.post('name');
            let password = this.post('password');
            if(name == 'tj'&&password==123){
                setTimeout(() =>{

                },2000)
                let userid = new Date().getTime();
                self.session('userid',userid);
                return self.json({code:1,userid:'12'})
            }else {
                this.json({code:0,llll:'0000'})
            }
        }
        if(this.isGet()){
            console.log('GET')

            console.log(await this.session('userid'))
            let code ;
            if(await this.session('userid') > 0){
                 code = 1
                console.log(1)
                return this.json({code:1,userid:await this.session('userid')});
            }else {
                code = 0
                console.log(0)

            }

        }
    }
}