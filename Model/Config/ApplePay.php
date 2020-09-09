<?php

namespace Swarming\SubscribePro\Model\Config;

class ApplePay extends \Magento\Payment\Gateway\Config\Config
{
    /**
     * Get merchant name to display
     *
     * @return string
     */
    public function getMerchantName(): string
    {
        return $this->getValue('merchant_name');
    }

    public function getMerchantDomainName(): string
    {
        return $this->getValue('merchant_domain_name');
    }
}
