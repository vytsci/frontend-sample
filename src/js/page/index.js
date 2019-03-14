/**
 * Page Index script that is only used in a single page once
 *
 * @type {{init: PageIndex.init}}
 */
PageIndex = {
  init: function () {
    console.log('Initialization of PageIndex script');

    ComponentA.init();
    ComponentB.init();
  },
};

$(PageIndex.init);
