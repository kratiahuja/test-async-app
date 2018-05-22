import Component from '@ember/component';

export default Component.extend({
    showButtonToggle: false,
    loadingComponent: true,
    componentData: null,

    didInsertElement() {
        this._super(...arguments);
        console.log('dd');
        $.ajax('/authors').then((data) => {
                console.log(data);
                console.log(data.data[0].attributes);
                this.set('componentData', data.data[0].attributes);
                this.toggleProperty('loadingComponent');
            });
    },

    actions: {
        onClickButton() {
            return $.ajax('/authors').then((data) => {
                console.log(data.data[0].attributes);
                this.set('buttonData', data.data[0].attributes);
                this.toggleProperty('showButtonToggle');
            });
        }

    }
});
