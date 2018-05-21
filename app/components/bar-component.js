import Component from '@ember/component';
import { resolve } from 'rsvp';

export default Component.extend({
    showButtonToggle: false,

    actions: {
        onClickButton() {
            return resolve($.ajax('/authors')).then((data) => {
                console.log(data.data[0].attributes);
                this.set('buttonData', data.data[0].attributes);
                this.toggleProperty('showButtonToggle');
            });
        }

    }
});
