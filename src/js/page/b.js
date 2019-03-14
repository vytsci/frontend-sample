/**
 * Page B script that is only used in a single page once
 *
 * @type {{init: PageB.init}}
 */
PageB = {
  init: function () {
    console.log('Initialization of PageB script');

    ComponentB.init();
  },
};

$(PageB.init);
