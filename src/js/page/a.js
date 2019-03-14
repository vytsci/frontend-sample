/**
 * Page A script that is only used in a single page once
 *
 * @type {{init: PageA.init}}
 */
PageA = {
  init: function () {
    console.log('Initialization of PageA script');

    ComponentA.init();
  },
};

$(PageA.init);
