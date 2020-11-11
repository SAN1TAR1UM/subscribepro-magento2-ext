/**
 * Subscribe Pro Apple Pay mini cart payment method integration.
 **/
define(
    [
        'uiComponent',
        'Swarming_SubscribePro/js/applepay/button',
        'Swarming_SubscribePro/js/applepay/api',
        'mage/translate',
        'domReady!'
    ],
    function (
        Component,
        button,
        buttonApi,
        $t
    ) {
        'use strict';

        return Component.extend({

            defaults: {
                id: null,
                clientToken: null,
                quoteId: 0,
                displayName: null,
                actionSuccess: null,
                grandTotalAmount: 0,
                isLoggedIn: false,
                storeCode: "default"
            },

            /**
             * @returns {Object}
             */
            initialize: function () {
                console.log('shortcut initialize')
                this._super();
                if (!this.displayName) {
                    this.displayName = $t('Store');
                }

                var api = new buttonApi();
                api.setGrandTotalAmount(parseFloat(this.grandTotalAmount).toFixed(2));
                api.setClientToken(this.clientToken);
                api.setDisplayName(this.displayName);
                api.setQuoteId(this.quoteId);
                api.setActionSuccess(this.actionSuccess);
                api.setIsLoggedIn(this.isLoggedIn);
                api.setStoreCode(this.storeCode);
                api.setCreateSessionUrl(this.createSessionUrl);

                console.log('shortcut button init', api);
                // Attach the button
                button.init(
                    document.getElementById(this.id),
                    api
                );

                return this;
            }
        });
    }
);
