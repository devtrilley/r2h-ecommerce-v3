// jQuery Code for Materialize Navbar
// This code is used the DOM to make the sidenav appear after the page is loaded, IF we click the menu icon
$(document).ready(function () {
  $(".sidenav").sidenav();
});

// DOM Manipulation Elements
const productGrid = document.querySelector(".product-grid");

// Product Class
class Product {
  // Constructor method hold 4 parameters, all holding key product card information
  constructor(
    productName, // name of product
    productPrice, // price of product
    productDescription, // product description
    productImage, // productImage path/file
    productLink, // link to product on Amazon
    productAltText // link to product on Amazon
  ) {
    // "this" refers to the current instance. we're assigning the value of each param to their respective properties.
    this.productName = productName;
    this.productPrice = productPrice;
    this.productDescription = productDescription;
    this.productImage = productImage;
    this.productLink = productLink;
    this.productAltText = productAltText;
  }
}

// Products Array, holds all of our product instances/objects. Curren
const products = [
  // Product 1: Minimalist Keyboard
  new Product(
    "Keyboard",
    "34.99",
    "Sleek, all black keyboard",
    "https://m.media-amazon.com/images/I/61j3wQheLXL._AC_SL1500_.jpg",
    "https://www.amazon.com/Logitech-920-002478-K120-USB-Keyboard/dp/B003ELVLKU/ref=sr_1_4?dib=eyJ2IjoiMSJ9.Ta0ffNefK09weL2lPTey6Wub3lFId_-4cO2pZnXA43ewwq05_WtlshGxEfJPrbL38f8xO0uskNRngOPLXzgK3mdLsZItp2iRNxKkuy2U3P86jSKqDLviwWVxfcn7glumZBW8JYzx_C4idkcSazx032GRTTFHwIOZo0hja04LaXiF6A7cNYsKBjXrbhqyFq-LX6lRjXqB2U7GtN5ju6Xt_r1xj40uwBaqYQ3TrzBH-A0.weCpemCADkhdTiiENprgx4w2S_G11arUJYTB0HfanVs&dib_tag=se&keywords=keyboard&qid=1731729434&sr=8-4&th=1",
    'Photo of a minimalist keyboard'
  ),
  // Product 2: Shirt
  new Product(
    "Coding T-Shirt",
    "29.99",
    "Stylish programming T-shirt",
    "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C51Sc7smljsL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png",
    "https://www.amazon.com/Coding-superpower-Software-Programmer-T-Shirt/dp/B096R593VT/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.vhEMhRFSP4nt2CsacQKyHn5K0d-SSVvwwvNU29K1BG7mWmdfkKxpcXnNNWj9g-4zZth9bwd2-PdbuDi761lcyOQGYtPkSWXfjx8XRNjS5uBIr72Mvyt3XGjphMj4NIeI0Ke2iiVtuFq5e_XBpc_B1q6t1YY1u9AIAceSmSHKU2_kEFG9mHQvMG25yGnlcl_KT64A7dmglcXgIEulgdJ9spcchOgVO94iQTNB6D9dwZ4N_aLz2TTFWweoNcxoOiVblBUBDCBm26NZbRbEFY18EZTUXEGuvMBbuje2kkOavJQ.lr3ZssRPAAA2C-OgTCG0hnzKna9gZ4Oo3Jvs3Qw5VWM&dib_tag=se&keywords=coding+shirt&qid=1731729714&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    'Photo of a cute programming t-shirt'
  ),
  // Product 3: Hoodie
  new Product(
    "Hoodie",
    "20.99",
    "Warm, snazzy programming hoodie",
    "https://m.media-amazon.com/images/I/B1mEhjGJ2nL._CLa%7C2140%2C2000%7CB1CqVNRZKIL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png",
    "https://www.amazon.com/Funny-SQL-hoodie-Programmer-Programming/dp/B07NQXGGTL/ref=sr_1_18?crid=197CJS0SQUIVW&dib=eyJ2IjoiMSJ9.Ipy23pT8EEUIivMhHR_-w9XCE6zNT81EAHHaIRrevEGOIc2pspeuJwtFDOpOnNBczTKMCJ0l-aCfhLE2edkcMzd9gO7ohl5iiwACaYIJYIC_Y9e-EQ8RTHFUvRuJKP4wdKVNznAcqd3FXwZfBHx1nxej7qoISvN8VRasC1SD-h4DAe64zFe3JGRkzRID0BlrxcyZlnFT7kkszD5OKHq14XHhMEGC-7i5cxpnQA0Cy9RSHlqXmeE9lItYxN-eC2SccLEiGk_XAhjXAm3cHQxneAlt0YdFvgc7iPgQIXY9rSY.wk2fAzjdWSEgQ8RsBytiXwYo-DfS3LMXIWdllvv3p28&dib_tag=se&keywords=coding+hoodie&qid=1731729803&sprefix=coding+hoodie%2Caps%2C115&sr=8-18",
    'Photo of a programming hoodie'
  ),
  // Product 4: Stickers
  new Product(
    "Stickers",
    "7.99",
    "Sticker bombs your laptop with these awesome stickers",
    "https://m.media-amazon.com/images/I/81-N73PSkOL._AC_SL1500_.jpg",
    "https://www.amazon.com/Programming-Developers-Programmers-Icicrim-Waterproof/dp/B0D121R52S/ref=sr_1_3?crid=34ZBQ5RUWRHWU&dib=eyJ2IjoiMSJ9.jqapRre3FWSqR6PvM9q2TqhdEVZz12uvLZ-u-hT8JBdkq6hAesPdSvRgPyuwGV7gRnzaJcp8zQ4PUP4wnQU1lwUQbvb9aikoeaCMSMK37Dp1AwpENaPZGxPLQ8PZ-09ioa6lV_OYVroF5vpWYxwEamZHEbxv1PJohMFbHOJ3N43w725JIiuUWPe_FTP2Lax5nd5T3QISbYtpKPbJqCNCbhoZ8HMzxmqf7EK49qyNWe0.G5LKaP9CeMA87cwo9BXq7my89v26tXPA_l2yMACzcCs&dib_tag=se&keywords=coding%2Bstickers&qid=1731731337&sprefix=coding%2Bsti%2Caps%2C107&sr=8-3&th=1",
    'Photo of a sticker book for laptops'
  ),
  // Product 5: Beanie
  new Product(
    "Beanie",
    "11.99",
    "Linux beanie to hide your haircut",
    "https://m.media-amazon.com/images/I/61GWaxPucbL._AC_SX679_.jpg",
    "https://www.amazon.com/MTN-TOOL-Cuffed-Beanie-Penguin/dp/B0BPNH4TMV/ref=sr_1_4?crid=3MFNYHGAL1TAF&dib=eyJ2IjoiMSJ9.2w1O-bJyKWLjPYORL7aTD2RX88EjCJMqeIsrbFrsptTP5BzcKSunmeOetbOsL9NX0oyN4AaQsez_IE08XZ7ZxOZiHWriWZZqwqLedOcAH3rpIh47J6vVKKEPuGYqFnOEraXkv2ripK2GyteFrrBzJadp_oYnvtEzoccl_W6AOFoG4ElXKC5gdVPaDY1wGVcpAlCEnqduSs9cFCTCQcvRA9klLWJO1G4uKDn9Iq_-sS5PTHAI9-3sPZYXaxdSyjP_SoyMcR1fP60gOYr7oNyAlnzk4hoXCZ0Bl-8X2_pIapQ.ya4U7Gbjpu7dVL3whiEjmF9O3ZKTvZ6dxC3eHdmsQJ8&dib_tag=se&keywords=coding+beanie&qid=1731731372&sprefix=coding+beanie%2Caps%2C80&sr=8-4",
    'Photo of a programmign Beanie'
  ),
  // Product 6: Mouse
  new Product(
    "Mouse",
    "22.99",
    "A bluetooth mouse for when your trackpad breaks",
    "https://m.media-amazon.com/images/I/5181UFuvoBL._AC_SL1500_.jpg",
    "https://www.amazon.com/Logitech-Wireless-Mouse-M185-Swift/dp/B004YAVF8I/ref=sr_1_3?crid=OOQO7NB840GR&dib=eyJ2IjoiMSJ9.q0cfVk5pIDwp96MY0_ssCU_InOlCBajmnbKGAno2VWD7n1WH-yQtvLjY0NwNcoEngr7VeCcE9NNGER2lB8qL4zB1BfzJ8etlkk0uhMMK2c8cDVw3kdO_ziw0K8Yx8sEj9JKJbYwcdSnMUqCsGVJmiheirFrj7xzUwKPcJqPmD13l2RdKwXE3JDoizePp5RaV1tbdV9Sh-rVXn5G6ZjkFgjSGPFya6zb0Gldur-pZZuY.rHUdgGxL7nNIA86aYOuO90ylhRubEfxFVIW2GVTzsVU&dib_tag=se&keywords=mouse&qid=1731731475&sprefix=mouse%2Caps%2C104&sr=8-3&th=1",
    'Photo of a computer mouse'
  ),
  // Product 7: Mousepad
  new Product(
    "Mousepad",
    "9.99",
    "Mousepad for your mouse... because every mouse deserves a home",
    "https://m.media-amazon.com/images/I/71HnS4gBdhL._AC_SL1500_.jpg",
    "https://www.amazon.com/Japanese-Gaming-Extended-Kanagawa-Non-Slip/dp/B0BB3B8G45/ref=sr_1_10?crid=2H3KATO2L9WXV&dib=eyJ2IjoiMSJ9.UX_cb9jWZD55CYuikTL1e5UaNTPuOjrDIhsUouv230JILB9bo9ZaQfjNgP9ABQeER2g3rA8W3Qux-n-WjskTH32fgAy9W5kwsaOzAxko6K4mUR7XyhAZZGQZfs0Gjr8Iu-Udg3KxZKNK8EIFa9iO0El2X4XY4_GZUj-DDrx_yfbfvpCPR-6j624TFPTR_Ty20AnZpGlXUlR-O2eQjnu35vaPXc8O6bcbGD6F_iCy0FnJY6thPkG1fWIX0kfgPYi4k7IRlt4R8ZVBK3ezwjDUOXSZumeyFRCLPssbRMv7J0k.Zmqoz6kHSJJXHZXdAeOraVOAFVWFzGD912ZH5vdnmVs&dib_tag=se&keywords=mouse%2Bpad&qid=1731731485&sprefix=mouse%2Caps%2C133&sr=8-10&th=1",
    'Photo of a mousepad for your mouse'
  ),
  // Product 8: Headphones
  new Product(
    "Headphones",
    "80.00",
    "Noise cancelling headphones to help you focus watching Code Over Uni videos",
    "https://m.media-amazon.com/images/I/61+tA0bjw5L._AC_SL1214_.jpg",
    "https://www.amazon.com/LORELEI-X6-Headphones-Microphone-Lightweight/dp/B083P1HG9S/ref=sr_1_1_sspa?crid=1ZE4QGYYS9WED&dib=eyJ2IjoiMSJ9.lNFOwrDmVqYZZx9W6jlKC1WxdKRSPH9WnDX4kBJ7X9raq6hzUi1JokelKlgRaHn4AtPwA2nTPgSouyCAHf96jTna24KDmM-j0twTZrfx9-cLY0pe5YncBd5_J2lSGisw3xznqv_ra8MPYloRFYyrO4QRvoEfxZno0SNgEWWC0Z3m0nlTV7svK1EeX2OjjLWClDJKTKntiw0wKPxUmPRQEwQkNWP0pyb5NAEz_HzEfFY.ZqAH7gn5Qxx_rSODXWM2KU5TLr72Qtjp5-GGhdzvF2o&dib_tag=se&keywords=headphones&qid=1731731614&sprefix=headphones%2Caps%2C116&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    'Photo of noise-cancelling headphones'
  ),
  // Product 9: Backpack
  new Product(
    "Backpack",
    "59.99",
    "Minimalist Backpack, with enough compartments to hold all of your work/school needs",
    "https://m.media-amazon.com/images/I/61OLLwLfXBL._AC_SL1500_.jpg",
    "https://www.amazon.com/BANGE-Business-Backpack-Waterproof-Charging/dp/B0CB41CVWX/ref=sr_1_2_sspa?crid=1UKNDP6I8174Z&dib=eyJ2IjoiMSJ9.mOb3t_u-rLxfNKnBe2BktwgaYyDrWKsWE4piOW9pFCDZIEh4JMI6A6z6-nbJgJpkeIGCSu88i6Dppzv9bfBSu9AMEinXZ0rSbBsn3SxzwCkvJlbI90imsOh1pFsWeq9j_UQkQLXDuDvflpDdiUjYN3RBu8nQZKEUeqJ0HlXRmuWwqerlzSlgxrI4aHJ9QEQvCwShutSr92if0f9L3ZDNMoZkN1BkNSZCtXd6nlwQLOQ.XW6Qg0OweiSjoFP04a2-BNQJH6wCMMmME73gGJtCtdw&dib_tag=se&keywords=minimalist+backpack&qid=1731731679&sprefix=minimakist+b%2Caps%2C93&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    'Photo of a minimalist backpack'
  ),
  // Product 10: Mug
  new Product(
    "Mug",
    "12.50",
    "The coffee mug that will make you the envy of everyone at the office",
    "https://m.media-amazon.com/images/I/61avXBs+MxL._AC_SL1500_.jpg",
    "https://www.amazon.com/Debugging-Programmer-Humorous-Computer-Science-Mug-Novelty/dp/B07P5F8T5D/ref=sr_1_3_sspa?crid=3UPIVNSFHH7SJ&dib=eyJ2IjoiMSJ9.bPGYnSvxxZokOk4-anjdjriKGbmWWM20dSYBDbWmIf5NF1AoN4tL2LkNeNrsp_9MxYLGlPJ9Uh_Zi3-_0ZD-vwqaBzxkyhoWGIkmpMAfKHT30ncNs_KhbXDmheTRB0XhjLdfHrKr49jiG-Eupp2cReE64hlsQFMYJo4GN-A-pxq_u5yrHMRrt54lHv23DLQyM1ECUX9eKiNdsrvzInodwtM9U31c98CwTXWHKNI3NAvzhW_52nxOL3COFVhb7bIqGMRnVW5BaqwTru3t2GzGQNy57LoRQx3BY4RhEWaBYwE.I7JfgVgeOjVySb9xGF1mRmQrmF2nbvEAhoQnvZvhftI&dib_tag=se&keywords=coding%2Bmug&qid=1731731867&sprefix=coding%2Bmug%2Caps%2C106&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    'Photo of a funny mug for programmers'
  ),
  // Product 11: Notebook
  new Product(
    "Notebook",
    "14.99",
    "Five subject divider notebook for notetaking on multiple languages. Enhance your learning!",
    "https://m.media-amazon.com/images/I/81FXTTRRCoL._AC_SL1500_.jpg",
    "https://www.amazon.com/CAGIE-Notebook-Supplies-Notebooks-Hardcover/dp/B09ZTTL69Y/ref=sr_1_6?crid=2UBE1LLPHR3MP&dib=eyJ2IjoiMSJ9.I2dINj0keB1bFyJ6N90TNIcGv0uIT5SvtMmjlRkTveVtauMPBA98tTjm0ACybLszCH6x3o0HuiSbCU-vXHZxYaYC82lxs3P-n4zZQffuWtOL__Nu6mRbmC8aMnjjSP5DkR36URdAXq6OrNuGdX36Z10yq7wSDA_27gZamHmFztEniFR1yLNVJQc-gjC0TGTwNIaJqk05lzjM5ZUrZK0AF3NZ2KQwh3xYe7zguExWNYRFNqCM4ctK8bXzMm7SNgCo87T6rCAhV548IFoj-ERyQi57kM038-B7s5PaBNmm1QM.3dcx6JaTztNcNMUk8BRRtcee-ujBddzBmvOwQOF8kFo&dib_tag=se&keywords=coding%2Bnotebook&qid=1731731907&sprefix=coding%2Bnote%2Caps%2C95&sr=8-6&th=1",
    'Photo of a 5 subject divider notebook'
  ),
  // Product 12: Sweatpants
  new Product(
    "Sweatpants",
    "24.99",
    "A staple for all of us programmers who work from home.",
    "https://m.media-amazon.com/images/I/81mvpMiGobL._AC_SY879_.jpg",
    "https://www.amazon.com/Fruit-Loom-Eversoft-Sweatpants-Bottom-Grey/dp/B09R8R81Q7/ref=sr_1_7?crid=21AGG0ZGJQ9BD&dib=eyJ2IjoiMSJ9.mWEvo36S7u-5EZW8V-YvRgVVmsurQIIr6BO0ACtHhJ3WjcByiO4mfCwzr9V26oBvoK_ImbirJfams5JjE-5nYNxRiU6l-ozoEEn0oH3mGZfgmjLV9ySVz0vZejOHqwiU5A1BVa7J7G9-q_9F0l68Rv6KZssLfIx1DSbww4dyD5sS6WRt1ArCew8MAg8pu92e_ZlIKRXVAOHZpXm8bsrhSdeqs_xZjg36k9Ppurne0ruRVrNAnaEoES-Lf1nftHIJ2XiKxqFMAK6HMmtieL8HF3Xep3oxG5GcdQYxzc2HPpM.Z2guqwXGWmFbooJDOY_uEOHVNu9mjrFgFfIM6S79G8w&dib_tag=se&keywords=casual+sweatpants&qid=1731732260&sprefix=casual+sweatpants%2Caps%2C95&sr=8-7",
    'Photo of casual grey sweatpants'
  ),
];

products.forEach((product) => {
  productGrid.innerHTML += `
  <div class="col s6 product-card">
    <img
      class="product-card__image product-card--image"
      src="${product.productImage}"
      alt="${product.productAltText}"
    />
    <p class="product-card__name product-card--name">${product.productName}</p>
    <p class="product-card__price product-card--price">${product.productPrice}</p>
    <p class="product-card__description product-card--description">
      ${product.productDescription}
    </p>
    <button class="product-card__button">Add to Cart</button>
  </div>`;
});
