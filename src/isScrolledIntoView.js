export const Utils = () => {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        const pageTop = window.scrollTop();
        const pageBottom = pageTop + window.height();
        const elementTop = element.offset().top;
        const elementBottom = elementTop + element.height();

        if (fullyInView === true) {
            console.log('in view')
        } else {
            console.log('out of view')
        }
    }
};