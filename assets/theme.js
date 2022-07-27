window.theme = window.theme || {}, window.slate = window.slate || {}, window.lazySizesConfig = window.lazySizesConfig || {}, lazySizesConfig.expFactor = 4,
    function (h) {
        var n, a, o, c, s, d, t, r, l, i, u, e, p, m, f, g, v, y, b, w, _, C, S, k, $, I, T, V, x, P, O, M, A, j, D, E, F, R, B, z, N, L, H, U, Q, q, Y, J, G, W, K, Z, X, ee, te, ie, ne, ae, oe, se, re, ce, de, le, he, ue, pe, me, fe, ge, ve, ye, be, we, _e, Ce, Se, ke, $e, Ie, Te, Ve, xe, Pe, Oe, Me, Ae;
        h = jQuery = h;

        function je(e) {
            this.$container = e.$container, this.variants = e.variants, this.singleOptionSelector = e.singleOptionSelector, this.originalSelectorId = e.originalSelectorId, this.enableHistoryState = e.enableHistoryState, this.currentVariant = this._getVariantFromOptions(), h(this.singleOptionSelector, this.$container).on("change", this._onSelectChange.bind(this))
        }

        function De(e, t, i) {
            var n = {
                close: ".js-modal-close",
                open: ".js-modal-open-" + t,
                openClass: "modal--is-active",
                closingClass: "modal--is-closing",
                bodyOpenClass: "modal-open",
                bodyOpenSolidClass: "modal-open--solid",
                bodyClosingClass: "modal-closing",
                closeOffContentClick: !0
            };
            if (this.id = e, this.$modal = h("#" + e), !this.$modal.length) return !1;
            this.nodes = {
                $parent: h("html").add("body"),
                $modalContent: this.$modal.find(".modal__inner")
            }, this.config = h.extend(n, i), this.modalIsOpen = !1, this.$focusOnOpen = this.config.focusOnOpen ? h(this.config.focusOnOpen) : this.$modal, this.isSolid = this.config.solid, this.init()
        }

        function Ee(e, t) {
            if (this.config = {
                id: e,
                close: ".js-drawer-close",
                open: ".js-drawer-open-" + t,
                openClass: "js-drawer-open",
                closingClass: "js-drawer-closing",
                activeDrawer: "drawer--is-open",
                namespace: ".drawer-" + t
            }, this.$nodes = {
                parent: h(document.documentElement).add("body"),
                page: h("#MainContent")
            }, this.$drawer = h("#" + e), !this.$drawer.length) return !1;
            this.isOpen = !1, this.init()
        }

        function Fe(e, t) {
            this.$wrapper = e, this.$input = e.find(n), this.$plus = e.find(a), this.$minus = e.find(o), this.minValue = this.$input.attr("min") || 1;
            var i = {
                namespace: null,
                key: this.$input.data("id")
            };
            this.options = h.extend(i, t), this.initEventListeners()
        }

        function Re() {
            this.status = {
                loaded: !1,
                loading: !1
            }, this.drawer = new theme.Drawers("CartDrawer", "cart");
            var e = h(t).html();
            this.template = Handlebars.compile(e), theme.cart.getCart().then(this.buildCart.bind(this)), this.initEventListeners()
        }

        function Be(e) {
            this.$form = e, this.$addToCart = this.$form.find(".add-to-cart"), this.$form.length && this.$form.on("submit", this.addItemFromForm.bind(this))
            this.$form.find("[data-loading]").removeAttr('data-loading');
        }

        function ze(e, t, i, n) {
            if (e.removeClass(m.hide).prepareTransition().css("height", t).toggleClass(m.open, !i), !i && n) {
                var a = e;
                window.setTimeout(function () {
                    a.css("height", "auto"), g = !1
                }, 500)
            } else g = !1
        }

        function Le() {
            h(C.logo).each(function () {
                var e = h(this),
                    t = e.width(),
                    i = e.closest(".grid__item").width();
                i < t ? e.css("maxWidth", i) : e.removeAttr("style")
            })
        }

        function He() {
            h(".site-header-sticky").css("height", b.outerHeight(!0))
        }

        function Ue() {
            var e = v.scrollTop();
            if (250 < e) {
                if (k.stickyActive) return;
                k.stickyActive = !0, b.addClass(k.stickyClass), k.wrapperOverlayed && y.removeClass(k.overlayedClass), setTimeout(function () {
                    b.addClass(k.openTransitionClass)
                }, 100)
            } else {
                if (!k.stickyActive) return;
                k.stickyActive = !1, b.removeClass(k.openTransitionClass).removeClass(k.stickyClass), k.wrapperOverlayed && y.addClass(k.overlayedClass)
            }
            k.lastScroll = e
        }

        function Qe() {
            $.$rteImages.find("img").each(function () {
                var e = h(this),
                    t = e.attr("style");
                t && "float: none;" != t || e.width() < $.$rteImages.width() && e.addClass("rte__no-indent")
            })
        }

        function Ge() {
            var e = h(this).data("value");
            if (theme.settings.nativeMultiCurrency) return h(this).addClass("is-active"), void theme.cart.updateCurrency(e);
            e !== O.currency && (O.currency = e, h(P.dataDiv).data("current-currency", e), We(e), Ke()), x.close()
        }

        function We(e) {
            h(P.pickerFlag).attr("data-flag", e), h(P.pickerLabel).text(e), h(P.currencyOptions).removeClass("is-active"), h(P.currencyOptions + "[data-value=" + e + "]").addClass("is-active")
        }

        function Ke() {
            if (!theme.settings.nativeMultiCurrency) {
                var e = h(P.dataDiv).data("current-currency");
                Currency.convertAll(Currency.currentCurrency, e)
            }
        }

        function nt(e, t) {
            this.$container = h(e), this.namespace = t.namespace, this.$container.length && (t.desktopOnly ? this.desktopInit() : this.init(this.$container, t))
        }

        function at() {
            h("#RecoverPasswordForm").toggleClass("hide"), h("#CustomerLoginForm").toggleClass("hide")
        }

        function ot(e) {
            st(e), h(window).on("scroll." + e, {
                id: e
            }, h.throttle(150, st))
        }

        function st(e) {
            var t, i, n;
            if (t = "string" == typeof e ? e : e.data.id, theme.isElementVisible(h("#" + t))) {
                if (L[t] && "unmuted" === L[t].style) return;
                H[n = t] && "function" == typeof H[n].playVideo && H[n].playVideo()
            } else H[i = t] && "function" == typeof H[i].pauseVideo && H[i].pauseVideo()
        }

        function rt(e) {
            e.closest(N.videoParent).addClass(z.loading)
        }

        function ct(e) {
            e.closest(N.videoParent).removeClass(z.loading).addClass(z.loaded)
        }

        function dt(e) {
            var t = this.$container = h(e),
                i = this.sectionId = t.attr("data-section-id");
            this.inModal = t.closest(".modal").length, this.$modal, this.settings = {
                enableHistoryState: t.data("enable-history-state") || !1,
                namespace: ".product-" + i,
                inventory: t.data("inventory") || !1,
                incomingInventory: t.data("incoming-inventory") || !1,
                modalInit: !1,
                slickMainInitialized: !1,
                slickThumbInitialized: !1,
                thumbArrows: !1,
                thumbVertical: !1,
                hasImages: !0,
                hasMultipleImages: !1,
                imageSize: "620x"
            }, this.inModal && (this.settings.enableHistoryState = !1, this.settings.namespace = ".product-" + i + "-modal", this.$modal = h("#QuickShopModal-" + i)), this.selectors = {
                variantsJson: "VariantsJson-" + i,
                currentVariantJson: "CurrentVariantJson-" + i,
                video: "ProductVideo-" + i,
                photoThumbs: ".product__thumb-" + i,
                thumbSlider: "#ProductThumbs-" + i,
                mainSlider: "#ProductPhotos-" + i,
                imageContainer: "[data-product-images]",
                productImageMain: ".product-image-main--" + i,
                priceWrapper: ".product__price-wrap-" + i,
                price: "#ProductPrice-" + i,
                comparePrice: "#ComparePrice-" + i,
                priceA11y: "#PriceA11y-" + i,
                comparePriceA11y: "#ComparePriceA11y-" + i,
                unitWrapper: ".product__unit-price-wrapper--" + i,
                unitPrice: ".product__unit-price--" + i,
                unitPriceBaseUnit: ".product__unit-base--" + i,
                sku: "#Sku-" + i,
                inventory: "#ProductInventory-" + i,
                inventoryForShipping: "#ProductInventoryShipping-" + i,
                incomingInventory: "#ProductIncomingInventory-" + i,
                addToCart: "#AddToCart-" + i,
                addToCartText: "#AddToCartText-" + i,
                originalSelectorId: "#ProductSelect-" + i,
                singleOptionSelector: ".variant__input-" + i,
                variantColorSwatch: ".variant__input--color-swatch-" + i,
                modalFormHolder: "#ProductFormHolder-" + i,
                formContainer: "#AddToCartForm-" + i
            }, this.$mainSlider = h(this.selectors.mainSlider), this.$thumbSlider = h(this.selectors.thumbSlider), this.$firstProductImage = this.$mainSlider.find("img").first(), this.$firstProductImage.length || (this.settings.hasImages = !1), this.init()
        }

        function lt(e) {
            var t = this.$container = h(e),
                i = this.sectionId = t.attr("data-section-id");
            this.selectors = {
                recommendations: "#Recommendations-" + i,
                placeholder: ".product-recommendations-placeholder",
                sectionClass: " .product-recommendations",
                productResults: ".grid-product"
            }, this.init()
        }

        function ht(e) {
            this.container = e, this.sectionId = h(e).attr("data-section-id"), this.namespace = ".collection-" + this.sectionId;
            var t = this.$heroContainer = h(e).find(".collection-hero");
            if (t.length) {
                if (this.checkIfNeedReload(), theme.loadImageSection(t), h(e).data("parallax")) {
                    var i = h(e).find(G),
                        n = {
                            namespace: this.namespace
                        };
                    theme.parallaxSections[this.namespace] = new theme.Parallax(i, n)
                }
            } else theme.settings.overlayHeader && theme.headerNav.disableOverlayHeader();
            h(window).on("popstate", function (e) {
                e && this.getNewCollectionContent(location.href)
            }.bind(this)), this.init()
        }

        function ut(e) {
            this.$container = h(e), this.sectionId = this.$container.attr("data-section-id"), this.config = {
                perRow: this.$container.attr("data-per-row"),
                perRowMobile: 2
            }, this.sliderArgs = {
                arrows: !0,
                infinite: !1,
                slidesToShow: this.config.perRow,
                slidesToScroll: this.config.perRow
            }, this.$activeSlider = null, this.init()
        }

        function pt(e) {
            for (var t = this.$container = h(e), i = (this.sectionId = t.attr("data-section-id"), 0); i < sections.instances.length; i++) {
                var n = sections.instances[i];
                "slideshow-section" === n.type && n.forceReload()
            }
            theme.currencySwitcher.init(), this.initDrawers(), theme.headerNav.init()
        }

        function mt(e) {
            var t = this.$container = h(e),
                i = (t.parent(), t.attr("data-section-id"));
            this.slideshow = "#Slideshow-" + i;
            this.namespace = "." + i;
            var n = h(e).find(".hero");
            if (n.length && theme.loadImageSection(n), this.init(), t.data("parallax")) {
                var a = {
                    namespace: this.namespace
                };
                theme.parallaxSections[this.namespace] = new theme.Parallax(t.find(ae), a)
            }
        }

        function ft(e) {
            var t = this.$container = h(e),
                i = (this.sectionId = t.attr("data-section-id"), this.youtubePlayerId = "YouTubeVideo-" + this.sectionId);
            this.namespace = "." + i;
            var n, a = this.vimeoPlayerId = "Vimeo-" + this.sectionId,
                o = (this.$vimeoTrigger = h("#VimeoTrigger-" + this.sectionId), "Mp4Video-" + this.sectionId),
                s = h("#" + i),
                r = h("#" + a),
                c = h("#" + o);
            this.vimeoPlayer = [], s.length && (this.youtubeVideoId = s.data("video-id"), this.initYoutubeVideo()), r.length && (this.vimeoVideoId = r.data("video-id"), this.initVimeoVideo()), c.length && (yt(c), (n = o, document.querySelector("#" + n).play()).then(function () { }).catch(function (e) {
                bt(c)
            }))
        }

        function gt(e) {
            var t, i, n;
            t = "string" == typeof e ? e : e.data.id, theme.isElementVisible(h("#" + t)) ? re[n = t] && "function" == typeof re[n].playVideo && re[n].playVideo() : re[i = t] && "function" == typeof re[i].pauseVideo && re[i].pauseVideo()
        }

        function vt(e) {
            e.closest(he.videoParent).addClass(ue.loading)
        }

        function yt(e) {
            e.closest(he.videoParent).removeClass(ue.loading).addClass(ue.loaded)
        }

        function bt(e) {
            e.closest(he.videoParent).addClass(ue.interactable)
        }

        function wt(e) {
            var t = h(e),
                i = t.attr("data-section-id");
            if (this.namespace = "." + i, t.length && t.data("parallax")) {
                var n = t.find(pe),
                    a = {
                        namespace: this.namespace,
                        desktopOnly: !0
                    };
                theme.parallaxSections[this.namespace] = new theme.Parallax(n, a)
            }
        }

        function _t(e) {
            var t = (this.$container = h(e)).attr("data-section-id"),
                i = (this.wrapper = ".testimonials-wrapper", this.slider = "#Testimonials-" + t),
                n = h(i);
            this.sliderActive = !1;
            var a = h.extend({}, fe, {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: !0
            });
            (me = n.data("count")) < fe.slidesToShow && (fe.slidesToShow = me, fe.slidesToScroll = me), n.on("init", this.a11y.bind(this)), theme.config.bpSmall ? this.init(n, a) : this.init(n, fe), h("body").on("matchSmall", function () {
                this.init(n, a)
            }.bind(this)), h("body").on("unmatchSmall", function () {
                this.init(n, fe)
            }.bind(this))
        }

        function Ct(e) {
            var t = (this.$container = h(e)).attr("data-section-id");
            this.namespace = ".instagram-" + t, this.$target = h("#Instafeed-" + t), this.$target.length && (this.checkVisibility(), h(window).on("scroll" + this.namespace, h.throttle(100, this.checkVisibility.bind(this))))
        }

        function St(e) {
            var t = this.$container = h(e),
                i = t.attr("data-section-id");
            this.cookieName = "newsletter-" + i, t.length && "/challenge" !== window.location.pathname && (this.data = {
                secondsBeforeShow: t.data("delay-seconds"),
                daysBeforeReappear: t.data("delay-days"),
                cookie: Cookies.get(this.cookieName),
                testMode: t.data("test-mode")
            }, this.modal = new theme.Modals("NewsletterPopup-" + i, "newsletter-popup-modal"), (t.find(".errors").length || t.find(".note--success").length) && this.modal.open(), t.find(".note--success").length ? this.closePopup(!0) : (h("body").on("modalClose." + t.attr("id"), this.closePopup.bind(this)), this.data.cookie && !this.data.testMode || this.initPopupDelay()))
        }
        function kt(e) {
            var t = this.$container = h(e),
                i = t.attr("data-section-id");
            this.namespace = ".fading-images-" + i;
            if (t.length) {
                var n = t.find(".fading-images");
                theme.loadImageSection(n), this.data = {
                    isInit: !1,
                    interval: t.data("interval"),
                    block_count: t.data("count"),
                    finish_interval: 1e3,
                    timer_offset: 400,
                    active_image: 1,
                    active_title: 1,
                    removed_compensation: !1
                }, this.selectors = {
                    $allTitles: t.find(".fading-images-overlay__titles")
                }, this.checkVisibility(), h(window).on("scroll" + this.namespace, h.throttle(100, this.checkVisibility.bind(this)))
            }
        }

        function $t(e) {
            this.$container = h(e), this.sectionId = this.$container.attr("data-section-id"), this.namespace = ".map-" + this.sectionId, this.$map = this.$container.find(Te), this.key = this.$map.data("api-key"), this.key && (this.checkVisibility(), h(window).on("scroll" + this.namespace, h.throttle(50, this.checkVisibility.bind(this))))
        }

        function It(e) {
            this.tagFilters()
        }

        function Tt(e, t) {
            this.$container = h(e), this.sectionId = t, this.namespace = ".photoswipe-" + this.sectionId, this.gallery, this.$images, this.inSlideshow = !1, "false" !== this.$container.attr("data-zoom") && ("true" === this.$container.attr("data-has-slideshow") && (this.inSlideshow = !0), this.init())
        }
        slate.utils = {
            defaultTo: function (e, t) {
                return null == e || e != e ? t : e
            }
        }, slate.a11y = {
            trapFocus: function (t) {
                var e = t.namespace ? "focusin." + t.namespace : "focusin";
                t.$elementToFocus || (t.$elementToFocus = t.$container), t.$container.attr("tabindex", "-1"), t.$elementToFocus.focus(), h(document).off("focusin"), h(document).on(e, function (e) {
                    t.$container[0] === e.target || t.$container.has(e.target).length || t.$container.focus()
                })
            },
            removeTrapFocus: function (e) {
                var t = e.namespace ? "focusin." + e.namespace : "focusin";
                e.$container && e.$container.length && e.$container.removeAttr("tabindex"), h(document).off(t)
            },
            lockMobileScrolling: function (e, t) {
                if (t) var i = t;
                else i = h(document.documentElement).add("body");
                i.on("touchmove" + e, function () {
                    return !1
                })
            },
            unlockMobileScrolling: function (e, t) {
                if (t) var i = t;
                else i = h(document.documentElement).add("body");
                i.off(e)
            }
        }, theme.Sections = function () {
            this.constructors = {}, this.instances = [], h(document).on("shopify:section:load", this._onSectionLoad.bind(this)).on("shopify:section:unload", this._onSectionUnload.bind(this)).on("shopify:section:select", this._onSelect.bind(this)).on("shopify:section:deselect", this._onDeselect.bind(this)).on("shopify:block:select", this._onBlockSelect.bind(this)).on("shopify:block:deselect", this._onBlockDeselect.bind(this))
        }, theme.Sections.prototype = h.extend({}, theme.Sections.prototype, {
            createInstance: function (e, t, i) {
                var n = h(e),
                    a = n.attr("data-section-id"),
                    o = n.attr("data-section-type");
                if (void 0 !== (t = t || this.constructors[o])) {
                    if (i)
                        if (this._findInstance(a)) return;
                    var s = h.extend(new t(e), {
                        id: a,
                        type: o,
                        container: e
                    });
                    this.instances.push(s)
                }
            },
            _onSectionLoad: function (e, t, i) {
                AOS && AOS.refreshHard();
                var n = t || h("[data-section-id]", e.target)[0];
                if (n) {
                    this.createInstance(n);
                    var a = t ? i : this._findInstance(e.detail.sectionId);
                    t || this._loadSubSections(), a && "function" == typeof a.onLoad && a.onLoad(e)
                }
            },
            _loadSubSections: function () {
                AOS && AOS.refreshHard(), h("[data-subsection]").each(function (e, t) {
                    this._onSectionLoad(null, t, h(t).data("section-id"))
                }.bind(this))
            },
            _onSectionUnload: function (e) {
                var t = this._removeInstance(e.detail.sectionId);
                t && "function" == typeof t.onUnload && t.onUnload(e)
            },
            _onSelect: function (e) {
                var t = this._findInstance(e.detail.sectionId);
                t && "function" == typeof t.onSelect && t.onSelect(e)
            },
            _onDeselect: function (e) {
                var t = this._findInstance(e.detail.sectionId);
                t && "function" == typeof t.onDeselect && t.onDeselect(e)
            },
            _onBlockSelect: function (e) {
                var t = this._findInstance(e.detail.sectionId);
                t && "function" == typeof t.onBlockSelect && t.onBlockSelect(e)
            },
            _onBlockDeselect: function (e) {
                var t = this._findInstance(e.detail.sectionId);
                t && "function" == typeof t.onBlockDeselect && t.onBlockDeselect(e)
            },
            _findInstance: function (e) {
                for (var t = 0; t < this.instances.length; t++)
                    if (this.instances[t].id === e) return this.instances[t]
            },
            _removeInstance: function (e) {
                for (var t, i = this.instances.length; i--;)
                    if (this.instances[i].id === e) {
                        t = this.instances[i], this.instances.splice(i, 1);
                        break
                    }
                return t
            },
            register: function (e, i, n) {
                this.constructors[e] = i;
                var t = h("[data-section-type=" + e + "]");
                n && (t = h("[data-section-type=" + e + "]", n)), t.each(function (e, t) {
                    this.createInstance(t, i, n)
                }.bind(this))
            }
        }), theme.Currency = {
            formatMoney: function (e, t) {
                t = t || theme.settings.moneyFormat, "string" == typeof e && (e = e.replace(".", ""));

                var i = "",
                    n = /\{\{\s*(\w+)\s*\}\}/,
                    a = t || "$";

                function o(e, t, i, n) {
                    if (t = slate.utils.defaultTo(t, 2), i = slate.utils.defaultTo(i, ","), n = slate.utils.defaultTo(n, "."), isNaN(e) || null == e) return 0;
                    var a = (e = (e / 100).toFixed(t)).split(".");
                    return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (a[1] ? n + a[1] : "")
                }
                switch (a.match(n)[1]) {
                    case "amount":
                        i = o(e, 2);
                        break;
                    case "amount_no_decimals":
                        i = o(e, 0);
                        break;
                    case "amount_with_comma_separator":
                        i = o(e, 2, ".", ",");
                        break;
                    case "amount_no_decimals_with_comma_separator":
                        i = o(e, 0, ".", ",");
                        break;
                    case "amount_no_decimals_with_space_separator":
                        i = o(e, 0, " ")
                }
                return a.replace(n, i)
            },
            getBaseUnit: function (e) {
                if (e && e.unit_price_measurement && e.unit_price_measurement.reference_value) return 1 === e.unit_price_measurement.reference_value ? e.unit_price_measurement.reference_unit : e.unit_price_measurement.reference_value + e.unit_price_measurement.reference_unit
            }
        }, theme.Images = {
            imageSize: function (e) {
                if (!e) return "620x";
                var t = e.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
                return null !== t ? t[1] : null
            },
            getSizedImageUrl: function (e, t) {
                if (!e) return e;
                if (null == t) return e;
                if ("master" === t) return this.removeProtocol(e);
                var i = e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
                if (null == i) return null;
                var n = e.split(i[0]),
                    a = i[0];
                return this.removeProtocol(n[0] + "_" + t + a)
            },
            removeProtocol: function (e) {
                return e.replace(/http(s)?:/, "")
            }
        }, slate.Variants = (je.prototype = h.extend({}, je.prototype, {
            _getCurrentOptions: function () {
                var e = h.map(h(this.singleOptionSelector, this.$container), function (e) {
                    var t = h(e),
                        i = t.attr("type"),
                        n = {};

                    return "radio" === i || "checkbox" === i ? !!t[0].checked && (n.value = t.val(), n.index = t.data("index"), n) : (n.value = t.val(), n.index = t.data("index"), n)
                });

                return e = this._compact(e)
            },
            _getVariantFromOptions: function () {
                var options = this._getCurrentOptions(),
                    variants = this.variants,
                    foundVariant = undefined;

                variants.forEach(function (variant) {
                    var isCorrect = true;

                    if (variant.options.length !== options.length) {
                        return;
                    }

                    options.forEach(function (option) {
                        isCorrect = isCorrect && variant[option.index] === option.value
                    })

                    if (isCorrect) {
                        foundVariant = variant;
                    }
                });

                return foundVariant;
            },
            _onSelectChange: function () {
                var variant = this._getVariantFromOptions();

                const options = this._getCurrentOptions();
                const variants = this.variants;

                window.onProductFormSelectChanged && window.onProductFormSelectChanged({ options, variants, variant, updateImages: this._updateImages.bind(this) });

                if (!variant) {
                    return
                }

                this.$container.trigger({
                    type: "variantChange",
                    variant: variant
                }), variant && (this._updateMasterSelect(variant), this._updateImages(variant), this._updatePrice(variant), this._updateUnitPrice(variant), this._updateSKU(variant), this.currentVariant = variant, variantShippingInfo(variant.id), this.enableHistoryState && this._updateHistoryState(variant))
            },
            _updateImages: function (e) {
                if (!e) {
                    return;
                }

                var t = e.featured_image || {},
                    i = this.currentVariant && this.currentVariant.featured_image || {};

                e.featured_image && t.src !== i.src && this.$container.trigger({
                    type: "variantImageChange",
                    variant: e
                })
            },
            _updatePrice: function (e) {
                this.currentVariant && e.price === this.currentVariant.price && e.compare_at_price === this.currentVariant.compare_at_price || this.
                    $container.trigger({
                        type: "variantPriceChange",
                        variant: e
                    })
            },
            _updateUnitPrice: function (e) {
                if (!this.currentVariant || e.unit_price !== this.currentVariant.unit_price) {
                    this.$container.trigger({
                        type: "variantUnitPriceChange",
                        variant: e
                    })
                }
            },
            _updateSKU: function (e) {
                if (!this.currentVariant || e.sku !== this.currentVariant.sku) {
                    this.$container.trigger({
                        type: "variantSKUChange",
                        variant: e
                    })
                }
            },
            _updateHistoryState: function (e) {
                if (history.replaceState && e) {
                    var t = window.location.protocol + "//" + window.location.host + window.location.pathname + "?variant=" + e.id;
                    window.history.replaceState({
                        path: t
                    }, "", t)
                }
            },
            _updateMasterSelect: function (e) {
                h(this.originalSelectorId, this.$container).val(e.id)
            },
            _compact: function (e) {
                for (var t = -1, i = null == e ? 0 : e.length, n = 0, a = []; ++t < i;) {
                    var o = e[t];
                    o && (a[n++] = o)
                }
                return a
            }
        }), je), slate.rte = {
            init: function () {
                slate.rte.wrapTable(), slate.rte.wrapVideo(), slate.rte.imageLinks()
            },
            wrapTable: function () {
                h(".rte table").wrap('<div class="table-wrapper"></div>')
            },
            wrapVideo: function () {
                var e = h('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]'),
                    t = e.add("iframe#admin_bar_iframe");
                e.each(function () {
                    h(this).parents(".video-wrapper").length || h(this).wrap('<div class="video-wrapper"></div>')
                }), t.each(function () {
                    this.src = this.src
                })
            },
            imageLinks: function () {
                h(".rte a img").parent().addClass("rte__image")
            }
        }, theme.Modals = (De.prototype.init = function () {
            h(this.config.open).attr("aria-expanded", "false"), h(this.config.open).on("click", this.open.bind(this)), this.$modal.find(this.config.close).on("click", this.close.bind(this)), h("body").on("drawerOpen", function () {
                this.close()
            }.bind(this))
        }, De.prototype.open = function (e) {
            var t = !1;
            this.modalIsOpen || (e ? e.preventDefault() : t = !0, e && e.stopPropagation && (e.stopPropagation(), this.$activeSource = h(e.currentTarget)), this.modalIsOpen && !t && this.close(), this.$modal.prepareTransition().addClass(this.config.openClass), this.nodes.$parent.addClass(this.config.bodyOpenClass), this.isSolid && this.nodes.$parent.addClass(this.config.bodyOpenSolidClass), this.modalIsOpen = !0, slate.a11y.trapFocus({
                $container: this.$modal,
                $elementToFocus: this.$focusOnOpen,
                namespace: "modal_focus"
            }), this.$activeSource && this.$activeSource.attr("aria-expanded") && this.$activeSource.attr("aria-expanded", "true"), h("body").trigger("productModalOpen").trigger("modalOpen." + this.id), this.bindEvents())
        }, De.prototype.close = function () {
            if (this.modalIsOpen) {
                h(document.activeElement).trigger("blur"), this.$modal.prepareTransition().removeClass(this.config.openClass).addClass(this.config.closingClass), this.nodes.$parent.removeClass(this.config.bodyOpenClass), this.nodes.$parent.addClass(this.config.bodyClosingClass);
                var e = this;
                window.setTimeout(function () {
                    e.nodes.$parent.removeClass(e.config.bodyClosingClass), e.$modal.removeClass(e.config.closingClass)
                }, 500), this.isSolid && this.nodes.$parent.removeClass(this.config.bodyOpenSolidClass), this.modalIsOpen = !1, slate.a11y.removeTrapFocus({
                    $container: this.$modal,
                    namespace: "modal_focus"
                }), this.$activeSource && this.$activeSource.attr("aria-expanded") && this.$activeSource.attr("aria-expanded", "false").focus(), h("body").trigger("modalClose." + this.id), this.unbindEvents()
            }
        }, De.prototype.bindEvents = function () {
            this.nodes.$parent.on("keyup.modal", function (e) {
                27 === e.keyCode && this.close()
            }.bind(this)), this.config.closeOffContentClick && (this.$modal.on("click.modal", this.close.bind(this)), this.nodes.$modalContent.on("click.modal", function (e) {
                e.stopImmediatePropagation()
            }))
        }, De.prototype.unbindEvents = function () {
            this.nodes.$parent.off(".modal"), this.config.closeOffContentClick && (this.$modal.off(".modal"), this.nodes.$modalContent.off(".modal"))
        }, De), theme.Drawers = (Ee.prototype = h.extend({}, Ee.prototype, {
            init: function () {
                var e = h(this.config.open);
                e.attr("aria-expanded", "false"), e.on("click", this.open.bind(this)), this.$drawer.find(this.config.close).on("click", this.close.bind(this)), h("body").on("productModalOpen", function () {
                    this.close()
                }.bind(this))
            },
            open: function (e) {
                e && e.preventDefault(), this.isOpen || (e && e.stopPropagation && (e.stopPropagation(), this.$activeSource = h(e.currentTarget)), this.$drawer.prepareTransition().addClass(this.config.activeDrawer), this.$nodes.parent.addClass(this.config.openClass), this.isOpen = !0, slate.a11y.trapFocus({
                    $container: this.$drawer,
                    namespace: "drawer_focus"
                }), h("body").trigger("drawerOpen").trigger("drawerOpen." + this.config.id), this.$activeSource && this.$activeSource.attr("aria-expanded") && this.$activeSource.attr("aria-expanded", "true"), this.bindEvents())
            },
            close: function () {
                if (this.isOpen) {
                    h(document.activeElement).trigger("blur"), this.$drawer.prepareTransition().removeClass(this.config.activeDrawer), this.$nodes.parent.removeClass(this.config.openClass), this.$nodes.parent.addClass(this.config.closingClass);
                    var e = this;
                    window.setTimeout(function () {
                        e.$nodes.parent.removeClass(e.config.closingClass)
                        jQuery("#kustomer-root").attr("style", "display:block !important")
                    }, 500), this.isOpen = !1, slate.a11y.removeTrapFocus({
                        $container: this.$drawer,
                        namespace: "drawer_focus"
                    }), this.$activeSource && this.$activeSource.attr("aria-expanded") && this.$activeSource.attr("aria-expanded", "false"), this.unbindEvents()
                }
            },
            bindEvents: function () {
                slate.a11y.lockMobileScrolling(this.config.namespace, this.$nodes.page), this.$nodes.page.on("click" + this.config.namespace, function () {
                    return this.close(), !1
                }.bind(this)), this.$nodes.parent.on("keyup" + this.config.namespace, function (e) {
                    27 === e.keyCode && this.close()
                }.bind(this))
            },
            unbindEvents: function () {
                slate.a11y.unlockMobileScrolling(this.config.namespace, this.$nodes.page), this.$nodes.parent.off(this.config.namespace), this.$nodes.page.off(this.config.namespace)
            }
        }), Ee), theme.cart = {
            getCart: function () {
                var root_url = window.langify && window.langify.locale.root_url != '/' ? window.langify.locale.root_url : '';
                return h.getJSON(root_url + "/cart.js")
            },
            changeItem: function (e, t) {
                return this._updateCart({
                    type: "POST",
                    url: "/cart/change.js",
                    data: "quantity=" + t + "&id=" + e,
                    dataType: "json"
                })
            },
            addItemFromForm: function (e) {
                return this._updateCart({
                    type: "POST",
                    url: "/cart/add.js",
                    data: e,
                    dataType: "json"
                })
            },
            _updateCart: function (e) {
                return h.ajax(e).then(function (e) {
                    return e
                }.bind(this))
            },
            updateNote: function (e) {
                var t = {
                    type: "POST",
                    url: "/cart/update.js",
                    data: "note=" + theme.cart.attributeToString(e),
                    dataType: "json",
                    success: function (e) { },
                    error: function (e, t) { }
                };
                h.ajax(t)
            },
            updateCurrency: function (e) {
                var t = {
                    type: "POST",
                    url: "/cart/update.js",
                    data: "currency=" + e,
                    dataType: "json",
                    success: function (e) {
                        localStorage.setItem('sheertex.userCurrency', e);
                        location.reload()
                    },
                    error: function (e, t) { }
                };
                h.ajax(t)
            },
            attributeToString: function (e) {
                return "string" != typeof e && "undefined" === (e += "") && (e = ""), h.trim(e)
            }
        }, h(function () {
            h("body").on("click", ".cart__checkout", function () {
                h(this).addClass("btn--loading")
            }), h("body").on("change", 'textarea[name="note"]', function () {
                var e = h(this).val();
                theme.cart.updateNote(e)
            }), h("body").on("click", ".cart__checkout--ajax", function (e) {
                if (!h("#CartAgree").is(":checked")) return alert(theme.strings.cartTermsConfirmation), h(this).removeClass("btn--loading"), !1
            }), h("body").on("click", ".cart__checkout--page", function (e) {
                if (!h("#CartPageAgree").is(":checked")) return alert(theme.strings.cartTermsConfirmation), h(this).removeClass("btn--loading"), !1
            })
        }), theme.QtySelector = (n = ".js-qty__num", a = ".js-qty__adjust--plus", o = ".js-qty__adjust--minus", Fe.prototype = h.extend({}, Fe.prototype, {
            initEventListeners: function () {
                this.$plus.on("click", function () {
                    var e = this.validateQty(this.$input.val());
                    this.addQty(e)
                }.bind(this)), this.$minus.on("click", function () {
                    var e = this.validateQty(this.$input.val());
                    this.subtractQty(e)
                }.bind(this)), this.$input.on("change", function () {
                    var e = this.validateQty(this.$input.val());
                    this.changeQty(e)
                }.bind(this))
            },
            addQty: function (e) {
                var t = e + 1;
                this.changeQty(t)
            },
            subtractQty: function (e) {
                var t = e - 1;
                t <= this.minValue && (t = this.minValue), this.changeQty(t)
            },
            changeQty: function (e) {
                this.$input.val(e), h("body").trigger("qty" + this.options.namespace, [this.options.key, e])
            },
            validateQty: function (e) {
                return parseFloat(e) == parseInt(e) && !isNaN(e) || (e = 1), parseInt(e)
            }
        }), Fe), theme.CartDrawer = (c = ".ajaxcart", s = "#CartDrawer", d = "#CartContainer", t = "#CartTemplate", r = ".drawer__footer--fixed", l = ".drawer__inner--has-fixed-footer", i = ".cart-link__bubble", Re.prototype = h.extend({}, Re.prototype, {
            initEventListeners: function () {
                h("body").on("updateCart" + c, this.initQtySelectors.bind(this)), h("body").on("updateCart" + c, this.sizeFooter.bind(this)), h("body").on("updateCart" + c, this.updateCartNotification.bind(this)), h("body").on("drawerOpen.CartDrawer", this.sizeFooter.bind(this)), h(window).on("resize" + c, h.debounce(150, this.sizeFooter.bind(this))), h("body").on("added.ajaxProduct", function () {
                    theme.cart.getCart().then(function (e) {
                        this.buildCart(e, !0)
                    }.bind(this))
                }.bind(this))
            },
            buildCart: function (e, t) {
                if (this.loading(!0), this.emptyCart(), 0 === e.item_count) {
                    if (window.langify && window.langify.locale.iso_code == 'fr') {
                        h(d).append('<p class="appear-animation appear-delay-3">' + theme.strings.cartEmpty + '</p><div class="emptyCart-buttons"><a href ="/collections/all"><button type="button" class="btn btn--full btn--no-animate tw-rounded-3xl add-to-cart">Voir Tout</button></a><a href ="/fr/collections/best-sellers-1"><button type="button" class="btn btn--full btn--no-animate tw-rounded-3xl add-to-cart">Les plus populaires</button></a><a href ="fr//collections/new-arrivals"><button type="button" class="btn btn--full btn--no-animate tw-rounded-3xl add-to-cart">Nouvelles Arrivées</button></a></div>');
                    } else {
                        h(d).append('<p class="appear-animation appear-delay-3">' + theme.strings.cartEmpty + '</p><div class="emptyCart-buttons"><a href ="/collections/all"><button type="button" class="btn btn--full btn--no-animate tw-rounded-3xl add-to-cart">All Products</button></a><a href ="/collections/best-sellers-1"><button type="button" class="btn btn--full btn--no-animate tw-rounded-3xl add-to-cart">Best Sellers</button></a><a href ="/collections/new-arrivals"><button type="button" class="btn btn--full btn--no-animate tw-rounded-3xl add-to-cart">New Arrivals</button></a><div class="tw-my-8"><hr/></div></div>');
                    }
                }
                else {
                    var i, o = [],
                        s = {},
                        r = 1;
                    h.each(e.items, function (e, i) {
                        var varID = i.variant_id;
                        var comparePrice;
                        var unformattedPrice;

                        h.ajax({
                            url: '/products/' + i.handle + '.js',
                            dataType: 'json',
                            async: false,
                            success: function (i) {
                                i["compare_at_price"] = 0;
                                i.variants.forEach(function (variant) {
                                    if (variant.id == varID && variant.compare_at_price !== 0) {
                                        comparePrice = variant.compare_at_price;
                                        has_sale = true;
                                        return false;
                                    }
                                });
                            }
                        });

                        var originalComparePrice = null;
                        if (comparePrice == null || comparePrice < 1) {
                            comparePrice = '';
                        } else {
                            TotalcomparePrice = i.quantity * comparePrice;
                            unformattedPrice = TotalcomparePrice;
                            originalComparePrice = comparePrice;
                            comparePrice = theme.Currency.formatMoney(comparePrice, theme.settings.moneyFormat);
                        }

                        var t;
                        t = null !== i.image ? i.image.replace(/(\.[^.]*)$/, "_180x$1") : "//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif", null !== i.properties && h.each(i.properties, function (e, t) {
                            "_" !== e.charAt(0) && t || delete i.properties[e]
                        });
                        var n = 0;
                        if (0 !== i.line_level_discount_allocations.length)
                            for (var a in i.line_level_discount_allocations) n = i.line_level_discount_allocations[a].amount, i.line_level_discount_allocations[a].formattedAmount = theme.Currency.formatMoney(n, theme.settings.moneyFormat);
                        //r += 2, s = {
                        r += 2;
                        s = {
                            key: i.key,
                            url: i.url,
                            img: t,
                            animationRow: r,
                            name: i.product_title,
                            variation: i.variant_title,
                            properties: i.properties,
                            itemQty: i.quantity,
                            price: theme.Currency.formatMoney(i.price, theme.settings.moneyFormat),
                            comparePrice: comparePrice,
                            unformattedPrice: unformattedPrice,
                            unitPrice: theme.Currency.formatMoney(i.unit_price, theme.settings.moneyFormat),
                            unitBase: theme.Currency.getBaseUnit(i),
                            discountedPrice: theme.Currency.formatMoney(i.price - i.total_discount / i.quantity, theme.settings.moneyFormat),
                            discounts: i.line_level_discount_allocations,
                            discountsApplied: 0 !== i.line_level_discount_allocations.length,
                            vendor: i.vendor,
                            shouldShowComparePrice: originalComparePrice != null && i.price < originalComparePrice
                        };

                        o.push(s);
                    }), r += 2;
                    var n = 0;
                    const totalCartComparePirceValues = o.map(item => item.unformattedPrice / 100);
                    var totalOrginalCartPrice = (totalCartComparePirceValues.reduce(function (acc, val) { return acc + val; }, 0));

                    if (0 !== e.cart_level_discount_applications.length)
                        for (var a in e.cart_level_discount_applications) n = e.cart_level_discount_applications[a].total_allocated_amount, e.cart_level_discount_applications[a].formattedAmount = theme.Currency.formatMoney(n, theme.settings.moneyFormat);

                    /* SHOW AMOUNT TO FREE SHIPPING  */
                    let cartCurrency = e.currency;
                    let DEFAULT_SHIPPING_FROM = 99; // used if we didn't found by currency
                    const FREE_SHIPPING_FROM_BY_CURRENCY = {
                        'USD': 75,
                        'CAD': 97,
                        'AUD': 106,
                        'EUR': 72,
                        'GBP': 60,
                        'ISK': 9805,
                        'NZD': 116,
                        'SEK': 737
                    }

                    let free_shipping_from = FREE_SHIPPING_FROM_BY_CURRENCY[cartCurrency]
                    if (!free_shipping_from) {
                        free_shipping_from = DEFAULT_SHIPPING_FROM
                    }

                    let free_shipping_from_in_cents = free_shipping_from * 100;

                    i = {
                        items: o,
                        note: e.note,
                        lastAnimationRow: r,
                        cartDiscounts: e.cart_level_discount_applications,
                        cartDiscountsApplied: 0 !== e.cart_level_discount_applications.length,
                        totalPrice: theme.Currency.formatMoney(e.total_price, theme.settings.moneyFormat),
                        earnedFreeShipping: free_shipping_from_in_cents <= e.total_price,
                        freeShippingThreshold: theme.Currency.formatMoney(free_shipping_from_in_cents, theme.settings.moneyFormat),
                        toFreeShipping: theme.Currency.formatMoney(free_shipping_from_in_cents - e.total_price, theme.settings.moneyFormat),
                        miniCartSavings: totalOrginalCartPrice - e.total_price / 100,
                    };
                    h(d).append(this.template(i))
                }
                this.status.loaded = !0, this.loading(!1), theme.settings.currenciesEnabled && theme.currencySwitcher.ajaxrefresh(), h("body").trigger("updateCart" + c, e), window.Shopify && Shopify.StorefrontExpressButtons && (Shopify.StorefrontExpressButtons.initialize(), setTimeout(function () {
                    this.sizeFooter()
                }.bind(this), 800)), !0 === t && this.drawer.open();
            },
            initQtySelectors: function () {
                console.log('cart update', h, d)

                h(d).find('a[href^="/products/"]').each(function (e, t) {
                    console.log(e, t)
                })

                h(d).find(".js-qty__wrapper").each(function (e, t) {
                    new theme.QtySelector(h(t), {
                        namespace: ".cart-drawer"
                    })
                }.bind(this)), h("body").on("qty.cart-drawer", this.updateItem.bind(this))
            },
            updateItem: function (e, t, i) {
                this.status.loading || (this.loading(!0), theme.cart.changeItem(t, i).then(function (e) {
                    this.updateSuccess(e)
                }.bind(this)).catch(function (e) {
                    this.updateError(e)
                }.bind(this)).always(function () {
                    this.loading(!1)
                }.bind(this)))
            },
            loading: function (e) {
                (this.status.loading = e) ? h(d).addClass("is-loading") : h(d).removeClass("is-loading")
            },
            emptyCart: function () {
                h(d).empty()
            },
            updateSuccess: function (e) {
                this.buildCart(e)
            },
            updateError: function (e) {
                e.responseJSON && e.responseJSON.description
            },
            sizeFooter: function () {
                if (h(s).hasClass("drawer--has-fixed-footer")) {
                    var e = h(s).find(r).removeAttr("style"),
                        t = h(s).find(l).removeAttr("style"),
                        i = e.outerHeight();
                    t.css("bottom", i), e.css("height", i)
                }
            },
            updateCartNotification: function (e, t) {
                0 < t.items.length ? h(i).addClass("cart-link__bubble--visible") : h(i).removeClass("cart-link__bubble--visible")
            }
        }), Re), theme.AjaxProduct = (u = {
            loading: !1
        }, Be.prototype = h.extend({}, Be.prototype, {
            addItemFromForm: function (e, t) {
                if (e.preventDefault(), !u.loading) {
                    var internalAddToCart = function () {
                        this.$addToCart.addClass("btn--loading"), u.loading = !0;
                        var i = this.$form.serialize();

                        theme.cart.addItemFromForm(i).then(function (e) {
                            this.success(e)
                        }.bind(this)).catch(function (e) {
                            this.error(e)
                        }.bind(this)).always(function () {
                            u.loading = !1, this.$addToCart.removeClass("btn--loading")
                        }.bind(this));
                    }
                    const listOfShippingCountries = ['CA', 'US', 'DE', 'FR', 'NL', 'GB', 'IE', 'AU', 'NZ'];
                    if (sessionStorage.getItem('sheertex.hasDisplayedGeoPopup') === 'true' ||
                        listOfShippingCountries.includes(window.__shopper__.geo.country_code)) {
                        internalAddToCart.call(this);
                    } else {
                        window.__shopper__ = window.__shopper__ || {};
                        window.__shopper__.popupCallback = internalAddToCart.bind(this);
                        document.getElementById("geoModal").style.display = "block";
                        window.__shopper__ && window.__shopper__.countryCallback && window.__shopper__.countryCallback();
                        sessionStorage.setItem('sheertex.hasDisplayedGeoPopup', 'true');
                    }
                }
            },
            success: function (e) {
                this.$form.find(".errors").remove(), h("body").trigger("added.ajaxProduct")
            },
            error: function (e) {
                this.$form.find(".errors").remove(), e.responseJSON && e.responseJSON.description && this.$form.prepend('<div class="text-center errors">' + e.responseJSON.description + "</div>")
            }
        }), Be), theme.collapsibles = (e = ".collapsible-trigger", p = ".collapsible-content__inner", m = {
            hide: "hide",
            open: "is-open",
            autoHeight: "collapsible--auto-height"
        }, g = !(f = ".collapsible"), {
            init: function () {
                h(e).each(function () {
                    var e = h(this),
                        t = e.hasClass(m.open);
                    e.attr("aria-expanded", t)
                }), h("body, .modal__inner").off(f).on("click" + f, e, function () {
                    if (!g) {
                        g = !0;
                        var e = h(this),
                            t = e.hasClass(m.open),
                            i = e.attr("aria-controls"),
                            n = h("#" + i),
                            a = n.find(p).outerHeight(),
                            o = e.hasClass(m.autoHeight);
                        t && o && setTimeout(function () {
                            ze(n, a = 0, t, o)
                        }, 0), t && !o && (a = 0), e.attr("aria-expanded", !t).toggleClass(m.open, !t), ze(n, a, t, o)
                    }
                })
            }
        }), theme.headerNav = (w = h(document.documentElement).add("body"), _ = h("#MainContent"), k = {
            namespace: ".siteNav",
            wrapperOverlayed: !(S = {
                hasDropdownClass: "site-nav--has-dropdown",
                hasSubDropdownClass: "site-nav__deep-dropdown-trigger",
                dropdownActive: "is-focused"
            }),
            overlayedClass: "is-light",
            overlayEnabledClass: "header-wrapper--overlay",
            stickyEnabled: !(C = {
                wrapper: ".header-wrapper",
                siteHeader: ".site-header",
                logoContainer: ".site-header__logo",
                logo: ".site-header__logo img",
                navigation: ".site-navigation",
                navContainerWithLogo: ".header-item--logo",
                navItems: ".site-nav__item",
                navLinks: ".site-nav__link",
                navLinksWithDropdown: ".site-nav__link--has-dropdown",
                navDropdownLinks: ".site-nav__dropdown-link--second-level"
            }),
            stickyActive: !1,
            stickyClass: "site-header--stuck",
            openTransitionClass: "site-header--opening",
            lastScroll: 0
        }, {
            init: function () {
                v = h(window), h(C.navContainerWithLogo), h(C.logoContainer), h(C.navigation), y = h(C.wrapper), b = h(C.siteHeader), k.stickyEnabled = b.data("sticky"), k.stickyEnabled && (k.wrapperOverlayed = y.hasClass(k.overlayedClass), k.lastScroll = 0, b.wrap('<div class="site-header-sticky"></div>'), He(), v.on("resize" + k.namespace, h.debounce(50, He)), v.on("scroll" + k.namespace, h.throttle(15, Ue)), Shopify && Shopify.designMode && setTimeout(function () {
                    He()
                }, 250)), theme.settings.overlayHeader = b.data("overlay"), theme.settings.overlayHeader && Shopify.designMode && h("body").hasClass("template-collection") && !h(".collection-hero").length && this.disableOverlayHeader(),
                    function () {
                        var n = !1,
                            a = !1,
                            o = !1;

                        function i(e) {
                            var t = e.parent();
                            if (t.hasClass(S.hasDropdownClass) && (t.addClass(S.dropdownActive), n = !0), !theme.config.isTouch && !o) {
                                var i = theme.config.isTouch ? "touchend" : "click";
                                o = !0, h("body").on(i + k.namespace, function () {
                                    r(), h("body").off(k.namespace), o = !1
                                })
                            }
                        }

                        function s(e, t) {
                            var i = e.parent();
                            (i.hasClass(S.hasSubDropdownClass) || t) && (i.addClass(S.dropdownActive), a = !0)
                        }

                        function r() {
                            e(), c()
                        }

                        function e() {
                            h(C.navItems).removeClass(S.dropdownActive)
                        }

                        function c() {
                            h(C.navDropdownLinks).parent().removeClass(S.dropdownActive)
                        }
                        theme.config.isTouch && (h(C.navLinksWithDropdown).on("touchend" + k.namespace, function (e) {
                            var t = h(this);
                            t.parent().hasClass(S.dropdownActive) ? window.location.replace(t.attr("href")) : (e.preventDefault(), r(), i(t))
                        }), h(C.navDropdownLinks).on("touchend" + k.namespace, function (e) {
                            var t = h(this),
                                i = t.parent();
                            i.hasClass(S.hasSubDropdownClass) ? i.hasClass(S.dropdownActive) ? window.location.replace(t.attr("href")) : (e.preventDefault(), c(), s(t)) : window.location.replace(t.attr("href"))
                        })), h(C.navLinks).on("focusin mouseover" + k.namespace, function () {
                            n && e(), a && c(), i(h(this))
                        }), h(C.navLinks).on("mouseleave" + k.namespace, function () {
                            r()
                        }), h(C.navDropdownLinks).on("focusin" + k.namespace, function () {
                            c(), s(h(this), !0)
                        })
                    }(), v.on("load" + k.namespace, Le), v.on("resize" + k.namespace, h.debounce(150, Le))
            },
            disableOverlayHeader: function () {
                h(C.wrapper).removeClass(k.overlayEnabledClass).removeClass(k.overlayedClass), k.wrapperOverlayed = !1
            },
            unload: function () {
                h(window).off(k.namespace), w.off(k.namespace), h(C.navLinks).off(k.namespace), h(C.navDropdownLinks).off(k.namespace)
            }
        }), theme.articleImages = ($ = {}, {
            init: function () {
                $.$rteImages = h(".rte--indented-images"), $.$rteImages.length && h(window).on("load", Qe)
            }
        }), theme.Slideshow = function () {
            this.$slideshow = null;
            var i = "is-init",
                a = "animate-out",
                n = "slideshow-wrapper",
                o = "slick-slide",
                s = "slick-current",
                r = "slideshow__pause",
                t = "is-paused";

            function e(e, t) {
                this.$slideshow = h(e), this.$wrapper = this.$slideshow.closest("." + n), this.$pause = this.$wrapper.find("." + r), this.settings = {
                    accessibility: !0,
                    arrows: !!t.arrows,
                    dots: !!t.dots,
                    fade: !!t.fade,
                    speed: t.speed ? t.speed : 500,
                    draggable: !0,
                    touchThreshold: 5,
                    pauseOnHover: !1,
                    autoplay: this.$slideshow.data("autoplay"),
                    autoplaySpeed: this.$slideshow.data("speed")
                }, this.$slideshow.on("init", this.init.bind(this)), this.settings.fade && (this.$slideshow.on("beforeChange", this.beforeSlideChange.bind(this)), this.$slideshow.on("afterChange", this.afterSlideChange.bind(this))), this.$slideshow.slick(this.settings), this.$pause.on("click", this._togglePause.bind(this))
            }
            return e.prototype = h.extend({}, e.prototype, {
                init: function (e, t) {
                    this.$slideshowList = t.$list, this.$slickDots = t.$dots, this.$allSlides = t.$slides, this.slideCount = t.slideCount, this.$slideshow.addClass(i), this._a11y(), this._clonedLazyloading()
                },
                beforeSlideChange: function (e, t, i, n) {
                    t.$slider.find("." + s).addClass(a)
                },
                afterSlideChange: function (e, t, i) {
                    t.$slider.find("." + o).removeClass(a)
                },
                destroy: function () {
                    this.$slideshow.slick("unslick")
                },
                _play: function () {
                    this.$slideshow.slick("slickPause"), h(r).addClass("is-paused")
                },
                _pause: function () {
                    this.$slideshow.slick("slickPlay"), h(r).removeClass("is-paused")
                },
                _togglePause: function () {
                    var e = this._getSlideshowId(this.$pause);
                    this.$pause.hasClass(t) ? (this.$pause.removeClass(t), h(e).slick("slickPlay")) : (this.$pause.addClass(t), h(e).slick("slickPause"))
                },
                _getSlideshowId: function (e) {
                    return "#Slideshow-" + e.data("id")
                },
                _activeSlide: function () {
                    return this.$slideshow.find(".slick-active")
                },
                _currentSlide: function () {
                    return this.$slideshow.find(".slick-current")
                },
                _nextSlide: function (e) {
                    return this.$slideshow.find('.slideshow__slide[data-slick-index="' + e + '"]')
                },
                _a11y: function () {
                    var t = this.$slideshowList,
                        i = this.settings.autoplay;
                    t && (t.removeAttr("aria-live"), h(n).on("focusin", function (e) {
                        h(n).has(e.target).length && (t.attr("aria-live", "polite"), i && this._pause())
                    }.bind(this)), h(n).on("focusout", function (e) {
                        h(n).has(e.target).length && (t.removeAttr("aria-live"), i && this._play())
                    }.bind(this)))
                },
                _clonedLazyloading: function () {
                    var o = this.$slideshow;
                    o.find(".slick-slide").each(function (e, t) {
                        var i = h(t);
                        if (i.hasClass("slick-cloned")) {
                            var n = i.data("id"),
                                a = i.find(".hero__image").removeClass("lazyloading").addClass("lazyloaded");
                            setTimeout(function () {
                                var e = o.find(".slideshow__slide--" + n + ":not(.slick-cloned) .hero__image").attr("style");
                                e && a.attr("style", e)
                            }, this.settings.autoplaySpeed / 1.5)
                        }
                    }.bind(this))
                }
            }), e
        }(), theme.currencySwitcher = (P = {
            dataDiv: "#CurrencyData",
            currencyOptions: ".currency-options__btn",
            pickerFlag: ".currency-picker .currency-flag",
            pickerLabel: ".currency-picker .currency-picker__label"
        }, O = {}, {
            init: function () {
                var e = h(P.dataDiv);
                e.length && (x = new theme.Modals("CurrencyModal", "currency-modal", {
                    closeOffContentClick: !1
                }), h(P.currencyOptions).on("click", Ge), O = {
                    currency: e.data("shop-currency"),
                    format: e.data("format"),
                    moneyFormat: e.data("money-format"),
                    moneyCurrencyFormat: e.data("money-currency-format")
                }, theme.settings.nativeMultiCurrency || (Currency.format = O.format, Currency.money_format[O.currency] = O.moneyFormat, Currency.money_with_currency_format[O.currency] = O.moneyCurrencyFormat, h("span.money span.money").each(function () {
                    h(this).parents("span.money").removeClass("money")
                }), h("span.money").each(function () {
                    h(this).attr("data-currency-" + O.currency, h(this).html())
                }), function () {
                    var e = Currency.cookie.read();
                    null == e ? Currency.currentCurrency = e = O.currency : h(P.currencyOptions).length && 0 === h(P.currencyOptions + "[data-value=" + e + "]").length ? (Currency.currentCurrency = O.currency, Currency.cookie.write(O.currency)) : e === O.currency ? Currency.currentCurrency = O.currency : Currency.convertAll(O.currency, e), h(P.dataDiv).data("current-currency", e), We(O.currency = e)
                }()))
            },
            refresh: Ke,
            ajaxrefresh: function () {
                if (!theme.settings.nativeMultiCurrency) {
                    var e = h(P.dataDiv).data("shop-currency"),
                        t = h(P.dataDiv).data("current-currency");
                    Currency.convertAll(e, t)
                }
            }
        }), theme.initQuickShop = function (e) {
            var n = [];
            h(".quick-product__btn").each(function () {
                var e = h(this).data("product-id"),
                    t = "QuickShopModal-" + e,
                    i = "quick-modal-" + e; - 1 < n.indexOf(e) ? h('.modal--quick-shop[data-product-id="' + e + '"]').each(function (e) {
                        0 < e && h(this).remove()
                    }) : (new theme.Modals(t, i), n.push(e))
            })
        }, theme.videoModal = function () {
            var r = {
                width: 1280,
                height: 720,
                playerVars: {
                    autohide: 0,
                    autoplay: 1,
                    branding: 0,
                    cc_load_policy: 0,
                    fs: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    playsinline: 1,
                    quality: "hd720",
                    rel: 0,
                    showinfo: 0,
                    wmode: "opaque"
                }
            },
                e = 'a[href*="youtube.com/watch"], a[href*="youtu.be/"]';
            if (h(e).length) {
                var c = new theme.Modals("VideoModal", "video-modal", {
                    closeOffContentClick: !0,
                    solid: !0
                });
                h(e).on("click", function (e) {
                    e.preventDefault(), window.loadYouTube(), theme.config.youTubeReady ? t(e) : h("body").on("youTubeReady", function () {
                        t(e)
                    })
                })
            }

            function t(e) {
                var t, i, n = h(e.currentTarget),
                    a = (t = n.attr("href"), !(!(i = t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/)) || 11 != i[7].length) && i[7]),
                    o = h.extend({}, r, {
                        videoId: a
                    });
                o.playerVars.playsinline = theme.config.bpSmall ? 0 : 1;
                var s = new YT.Player("VideoHolder", o);
                c.open(), h("body").on("modalClose.VideoModal", function () {
                    setTimeout(function () {
                        s.destroy()
                    }, 500)
                })
            }
        }, theme.parallaxSections = {}, theme.Parallax = (nt.prototype = h.extend({}, nt.prototype, {
            init: function (e) {
                var n = this.$window = h(window),
                    a = this.$container.offset().top;
                n.on("scroll" + this.namespace, function (e) {
                    var t = n.scrollTop(),
                        i = (a - t) / 7;
                    this.$container.css({
                        transform: "translate3d(0, " + i + "px, 0)"
                    })
                }.bind(this)), n.on("resize" + this.namespace, h.debounce(350, function () {
                    n.off(this.namespace), !e || theme.config.bpSmall ? this.init() : this.init(!0)
                }.bind(this)))
            },
            desktopInit: function () {
                theme.config.bpSmall || this.init(!0), h("body").on("matchSmall", function () {
                    this.destroy()
                }.bind(this)), h("body").on("matchLarge", function () {
                    this.init(!0)
                }.bind(this))
            },
            destroy: function () {
                this.$container.removeAttr("style"), this.$window.off(this.namespace)
            }
        }), nt), theme.customerTemplates = {
            init: function () {
                var e, t;
                "#recover" === window.location.hash && at(), h("#RecoverPassword").on("click", function (e) {
                    e.preventDefault(), at()
                }), h("#HideRecoverPasswordLink").on("click", function (e) {
                    e.preventDefault(), at()
                }), h(".reset-password-success").length && h("#ResetSuccess").removeClass("hide"), e = h("#AddressNewForm"), t = h(".js-address-form"), e.length && t.length && (Shopify && h(".js-address-country").each(function () {
                    var e = h(this),
                        t = e.data("country-id"),
                        i = e.data("province-id"),
                        n = e.data("province-container-id");
                    new Shopify.CountryProvinceSelector(t, i, {
                        hideElement: n
                    })
                }), h(".address-new-toggle").on("click", function () {
                    e.toggleClass("hide")
                }), h(".address-edit-toggle").on("click", function () {
                    var e = h(this).data("form-id");
                    h("#EditAddress_" + e).toggleClass("hide")
                }), h(".address-delete").on("click", function () {
                    var e = h(this),
                        t = e.data("form-id"),
                        i = e.data("confirm-message");
                    confirm(i || "Are you sure you wish to delete this address?") && Shopify.postLink("/account/addresses/" + t, {
                        parameters: {
                            _method: "delete"
                        }
                    })
                }))
            }
        }, theme.Product = (z = {
            onSale: "sale-price",
            disabled: "disabled",
            isModal: "is-modal",
            loading: "loading",
            loaded: "loaded",
            interactable: "video-interactable",
            visuallyHide: "visually-invisible"
        }, N = {
            productVideo: ".product__video",
            videoParent: ".product__video-wrapper",
            currentSlide: ".slick-current"
        }, L = {}, q = {
            byline: !(Q = []),
            title: !(U = {
                height: "480",
                width: "850",
                playerVars: {
                    autohide: 0,
                    autoplay: 1,
                    branding: 0,
                    cc_load_policy: 0,
                    controls: 0,
                    fs: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    playsinline: 1,
                    quality: "hd720",
                    rel: 0,
                    showinfo: 0,
                    wmode: "opaque"
                },
                events: {
                    onReady: function (e) {
                        var t = h(e.target.a),
                            i = t.attr("id");
                        H[i] = e.target;
                        H[i];
                        rt(t), "muted" === L[i].style ? H[i].mute().playVideo().pauseVideo() : ct(t);
                        !t.closest(N.currentSlide).length && 1 !== t.data("image-count") || "muted" !== L[i].style || (H[i].playVideo(), ot(i))
                    },
                    onStateChange: function (e) {
                        var t = h(e.target.a),
                            i = t.attr("id"),
                            n = H[i];
                        switch (e.data) {
                            case -1:
                                L[i].attemptedToPlay && (ct(t), function (e) {
                                    e.closest(N.videoParent).addClass(z.interactable)
                                }(t));
                                break;
                            case 0:
                                n.playVideo();
                                break;
                            case 1:
                                ct(t);
                                break;
                            case 3:
                                L[i].attemptedToPlay = !0
                        }
                    }
                }
            }),
            portrait: !(H = []),
            loop: !0
        }, dt.prototype = h.extend({}, dt.prototype, {
            init: function () {
                this.inModal && (this.$container.addClass(z.isModal), h("body").off("modalOpen.QuickShopModal-" + this.sectionId).off("modalClose.QuickShopModal-" + this.sectionId), h("body").on("modalOpen.QuickShopModal-" + this.sectionId, this.openModalProduct.bind(this)), h("body").on("modalClose.QuickShopModal-" + this.sectionId, this.closeModalProduct.bind(this))), this.inModal || (this.stringOverrides(), this.formSetup(), this.productSetup(), this.checkIfVideos(), this.createImageCarousels())
            },
            formSetup: function () {
                theme.settings.dynamicVariantsEnable && (this.$variantSelectors = h(this.selectors.formContainer).find(this.selectors.singleOptionSelector)), this.initQtySelector(), this.initAjaxProductForm(), this.initVariants()
            },
            productSetup: function () {
                this.setImageSizes(), this.initImageSwitch(), this.initImageZoom()
            },
            stringOverrides: function () {
                theme.productStrings = theme.productStrings || {}, h.extend(theme.strings, theme.productStrings)
            },
            setImageSizes: function () {
                if (this.settings.hasImages) {
                    var e = this.$firstProductImage[0].currentSrc;
                    e && (this.settings.imageSize = theme.Images.imageSize(e))
                }
            },
            initVariants: function () {
                if (document.getElementById(this.selectors.variantsJson)) {
                    this.variantsObject = JSON.parse(document.getElementById(this.selectors.variantsJson).innerHTML);
                    var e = {
                        $container: this.$container,
                        enableHistoryState: this.settings.enableHistoryState,
                        singleOptionSelector: this.selectors.singleOptionSelector,
                        originalSelectorId: this.selectors.originalSelectorId,
                        variants: this.variantsObject
                    };

                    h(this.selectors.variantColorSwatch).length && h(this.selectors.variantColorSwatch).on("change", function (e) {
                        var t = h(e.currentTarget),
                            i = t.data("color-name"),
                            n = t.data("color-index");
                        this.updateColorName(i, n)
                    }.bind(this));
                    this.variants = new slate.Variants(e);
                    this.$container.on("variantChange" + this.settings.namespace, this.updateCartButton.bind(this)).on("variantImageChange" + this.settings.namespace, this.updateVariantImage.bind(this)).on("variantPriceChange" + this.settings.namespace, this.updatePrice.bind(this)).on("variantUnitPriceChange" + this.settings.namespace, this.updateUnitPrice.bind(this)), h(this.selectors.sku).length && this.$container.on("variantSKUChange" + this.settings.namespace, this.updateSku.bind(this)), (this.settings.inventory || this.settings.incomingInventory || this.settings.inventoryForShipping) && this.$container.on("variantChange" + this.settings.namespace, this.updateInventory.bind(this)), theme.settings.dynamicVariantsEnable && document.getElementById(this.selectors.currentVariantJson) && (this.currentVariantObject = JSON.parse(document.getElementById(this.selectors.currentVariantJson).innerHTML), this.$variantSelectors.on("change" + this.settings.namespace, this.updateVariantAvailability.bind(this)), this.setCurrentVariantAvailability(this.currentVariantObject, !0))

                    window.initializeVariantsSelector && window.initializeVariantsSelector({
                        variants: this.variantsObject,
                        getCurrentOptions: this.variants._getCurrentOptions.bind(this.variants)
                    })
                }
            },
            updateColorName: function (e, t) {
                h("#VariantColorLabel-" + this.sectionId + "-" + t).text(e)
            },
            setCurrentVariantAvailability: function (t) {
                if (!t) {
                    return
                }

                var e = {
                    option1: [],
                    option2: [],
                    option3: []
                };
                this.disableVariantGroup(h(this.selectors.formContainer).find(".variant-input-wrap"));
                var i = this.variantsObject.filter(function (e) {
                    return t.id !== e.id && (t.option2 === e.option2 && t.option3 === e.option3 || t.option1 === e.option1 && t.option3 === e.option3 || t.option1 === e.option1 && t.option2 === e.option2 || void 0)
                }),
                    n = {
                        variant: t
                    };
                for (var a in i = Object.assign({}, n, i))
                    if (i.hasOwnProperty(a)) {
                        var o = i[a],
                            s = o.option1,
                            r = o.option2,
                            c = o.option3;
                        s && -1 === e.option1.indexOf(s) && e.option1.push(s), r && -1 === e.option2.indexOf(r) && e.option2.push(r), c && -1 === e.option3.indexOf(c) && e.option3.push(c)
                    }
                e.option1.length && this.enableVariantOptionByValue(e.option1, "option1"), e.option2.length && this.enableVariantOptionByValue(e.option2, "option2"), e.option3.length && this.enableVariantOptionByValue(e.option3, "option3")
            },
            updateVariantAvailability: function (e, t, i) {
                if (t && i) var n = t,
                    o = i;
                else {
                    var a = h(e.currentTarget);
                    n = a.val() ? a.val() : e.currentTarget.value, o = a.data("index")
                }
                var s = this.variantsObject.filter(function (e) {
                    return e[o] === n
                });
                h(this.selectors.formContainer).find(".variant-input-wrap").each(function (e, t) {
                    var i = h(t),
                        n = i.data("index");
                    if (n !== o) {
                        this.disableVariantGroup(i);
                        for (var a = 0; a < s.length; a++) this.enableVariantOption(i, s[a][n])
                    }
                }.bind(this))
            },
            disableVariantGroup: function (e) {
                "dropdown" === theme.settings.dynamicVariantType ? e.find("option").prop("disabled", !0) : (e.find("input").prop("disabled", !0), e.find("label").toggleClass("disabled", !0))
            },
            enableVariantOptionByValue: function (e, t) {
                for (var i = h(this.selectors.formContainer).find('.variant-input-wrap[data-index="' + t + '"]'), n = 0; n < e.length; n++) this.enableVariantOption(i, e[n])
            },
            enableVariantOption: function (e, t) {
                if (t = t.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, "\\$1"), "dropdown" === theme.settings.dynamicVariantType) e.find('option[value="' + t + '"]').prop("disabled", !1);
                else {
                    var i = e.find('.variant-input[data-value="' + t + '"]');
                    i.find("input").prop("disabled", !1), i.find("label").toggleClass("disabled", !1)
                }
            },
            updateCartButton: function (e) {
                var t = e.variant;

                t ? t.available ? (h(this.selectors.addToCart).removeClass(z.disabled).prop("disabled", !1), h(this.selectors.addToCartText).html(theme.strings.addToCart)) : (h(this.selectors.addToCart).addClass(z.disabled).prop("disabled", !0), h(this.selectors.addToCartText).html(theme.strings.soldOut)) : (h(this.selectors.addToCart).addClass(z.disabled).prop("disabled", !0), h(this.selectors.addToCartText).html(theme.strings.unavailable))
            },
            updatePrice: function (e) {
                var t = e.variant;
                if (igData?.price && t.id){
                    const price = parseFloat(igData.price.getPriceByVariantId(t.id));
                    if(!isNaN(price)){
                        t.price =  price * 100;
                    }
                    const comparePrice = parseFloat(igData.price.getPriceByVariantId(t.id, true));
                    if (!isNaN(comparePrice)){
                        t.compare_at_price = comparePrice * 100;
                    }
                }
                t && (h(this.selectors.price).html(theme.Currency.formatMoney(t.price, theme.settings.moneyFormat)).show(), t.compare_at_price > t.price ? (h(this.selectors.comparePrice).html(theme.Currency.formatMoney(t.compare_at_price, theme.settings.moneyFormat)), h(this.selectors.priceWrapper).removeClass("hide"), h(this.selectors.price).addClass(z.onSale).removeClass("igPrice"), h(this.selectors.comparePriceA11y).attr("aria-hidden", "false"), h(this.selectors.priceA11y).attr("aria-hidden", "false")) : (h(this.selectors.priceWrapper).addClass("hide"), h(this.selectors.price).removeClass(z.onSale).addClass('igPrice'), h(this.selectors.comparePriceA11y).attr("aria-hidden", "true"), h(this.selectors.priceA11y).attr("aria-hidden", "true")), theme.settings.currenciesEnabled && theme.currencySwitcher.ajaxrefresh())
            },
            updateUnitPrice: function (e) {
                var t = e.variant;

                t && t.unit_price ? (h(this.selectors.unitPrice).html(theme.Currency.formatMoney(t.unit_price, theme.settings.moneyFormat)), h(this.selectors.unitPriceBaseUnit).text(theme.Currency.getBaseUnit(t)), h(this.selectors.unitWrapper).removeClass("hide").removeClass(z.visuallyHide)) : h(this.selectors.unitWrapper).addClass(z.visuallyHide)
            },
            updateSku: function (e) {
                var t = e.variant,
                    i = "";
                t && (t.sku && (i = t.sku), h(this.selectors.sku).html(i))
            },
            updateInventory: function (e) {
                var t = e.variant;
                if (!t || !t.inventory_management) return this.toggleInventoryQuantity(!1), void this.toggleIncomingInventory(!1);
                if ("shopify" === t.inventory_management && window.inventories && window.inventories[this.sectionId]) {
                    variantInventoryObject = window.inventories[this.sectionId][t.id];
                    var i = variantInventoryObject.quantity,
                        n = !0,
                        a = !1;
                    (i <= 0 || i > theme.settings.inventoryThreshold) && (n = !1), this.toggleInventoryQuantity(n, i), !n && variantInventoryObject.incoming && (a = !0), this.toggleIncomingInventory(a, t.available, variantInventoryObject.next_incoming_date)
                }
            },
            toggleInventoryQuantity: function (e, t) {
                this.settings.inventory || this.settings.inventoryForShipping || (e = !1), e ? h(this.selectors.inventory).removeClass("hide").text(theme.strings.stockLabel.replace("[count]", t)) && h(this.selectors.inventoryForShipping).removeClass("hide").text(theme.strings.customInventoryLabel.replace("[count]", t)) : h(this.selectors.inventory).addClass("hide")
            },
            toggleIncomingInventory: function (e, t, i) {
                if (this.settings.incomingInventory || (e = !1), e) {
                    var n = t ? theme.strings.willNotShipUntil.replace("[date]", i) : theme.strings.willBeInStockAfter.replace("[date]", i);
                    i || (n = theme.strings.waitingForStock), h(this.selectors.incomingInventory).removeClass("hide").text(n)
                } else h(this.selectors.incomingInventory).addClass("hide")
            },
            updateVariantImage: function (e) {
                var t = e.variant,
                    i = (theme.Images.getSizedImageUrl(t.featured_image.src, this.settings.imageSize), h('.product__thumb[data-id="' + t.featured_image.id + '"]')),
                    n = this._slideIndex(i.closest(".product__thumb-item"));

                void 0 !== n && this.$mainSlider.slick("slickGoTo", n)
            },
            initImageSwitch: function () {
                h(this.selectors.photoThumbs).length && h(this.selectors.photoThumbs).on("click", function (e) {
                    e.preventDefault()
                })
            },
            initImageZoom: function () {
                var e = h(this.selectors.imageContainer, this.$container);
                new theme.Photoswipe(e[0], this.sectionId)
            },
            checkIfVideos: function () {
                var e = this.$mainSlider.find(N.productVideo);
                if (!e.length) return !1;
                var t = [];
                return e.each(function () {
                    var e = h(this).data("video-type");
                    t.indexOf(e) < 0 && t.push(e)
                }), -1 < t.indexOf("youtube") && (theme.config.youTubeReady ? this.loadYoutubeVideos(e) : (window.loadYouTube(), h("body").on("youTubeReady" + this.settings.namespace, function () {
                    this.loadYoutubeVideos(e)
                }.bind(this)))), -1 < t.indexOf("vimeo") && (B ? this.loadVimeoVideos(e) : (window.loadVimeo(), h("body").on("vimeoReady" + this.settings.namespace, function () {
                    this.loadVimeoVideos(e)
                }.bind(this)))), -1 < t.indexOf("mp4") && this.loadMp4Videos(e), t
            },
            loadMp4Videos: function (e) {
                e.each(function () {
                    var e = h(this);
                    if ("mp4" == e.data("video-type")) {
                        var t = e.attr("id");
                        e.data("video-id"), L[this.id] = {
                            type: "mp4",
                            divId: t,
                            style: e.data("video-style")
                        }
                    }
                })
            },
            loadVimeoVideos: function (e) {
                for (var t in e.each(function () {
                    var e = h(this);
                    if ("vimeo" == e.data("video-type")) {
                        var t = e.attr("id"),
                            i = e.data("video-id");
                        L[this.id] = {
                            type: "vimeo",
                            divId: t,
                            id: i,
                            style: e.data("video-style"),
                            width: e.data("video-width"),
                            height: e.data("video-height")
                        }
                    }
                }), L)
                    if ("vimeo" == L[t].type) {
                        var i = h.extend({}, q, L[t]);
                        Q[t] = new Vimeo.Player(L[t].divId, i)
                    }
                B = !0
            },
            autoplayVimeoVideo: function (e) {
                theme.config.bpSmall ? ct(h("#" + e)) : this.requestToPlayVimeoVideo(e)
            },
            requestToPlayVimeoVideo: function (e) {
                rt(h("#" + e)), B ? this.playVimeoVideo(e) : h("body").on("vimeoReady" + this.settings.namespace, function () {
                    this.playVimeoVideo(e)
                }.bind(this))
            },
            playVimeoVideo: function (e) {
                Q[e].play(), "muted" === L[e].style && Q[e].setVolume(0), ct(h("#" + e))
            },
            stopVimeoVideo: function (e) {
                if (theme.config.vimeoReady)
                    if (e) Q[e].pause();
                    else
                        for (key in Q) "function" == typeof Q[key].pause && Q[key].pause()
            },
            loadYoutubeVideos: function (e) {
                for (var t in e.each(function () {
                    var e = h(this);
                    if ("youtube" == e.data("video-type")) {
                        var t = e.attr("id"),
                            i = e.data("youtube-id");
                        L[this.id] = {
                            type: "youtube",
                            id: t,
                            videoId: i,
                            style: e.data("video-style"),
                            width: e.data("video-width"),
                            height: e.data("video-height"),
                            attemptedToPlay: !1
                        }
                    }
                }), L)
                    if ("youtube" === L[t].type && L.hasOwnProperty(t)) {
                        var i = h.extend({}, U, L[t]);
                        "muted" === i.style || (i.playerVars.controls = 1, i.playerVars.autoplay = 0), H[t] = new YT.Player(t, i)
                    }
                R = !0
            },
            requestToPlayYoutubeVideo: function (e, t) {
                if (theme.config.youTubeReady)
                    if (rt(h("#" + e)), "function" == typeof H[e].playVideo) this.playYoutubeVideo(e, t);
                    else {
                        var i = this;
                        setTimeout(function () {
                            i.playYoutubeVideo(e, t)
                        }, 1e3)
                    }
            },
            playYoutubeVideo: function (e, t) {
                ct(h("#" + e)), "function" == typeof H[e].playVideo && H[e].playVideo(), t || ot(e)
            },
            stopYoutubeVideo: function (e) {
                if (theme.config.youTubeReady)
                    if (e && H[e]) "function" == typeof H[e].pauseVideo && H[e].pauseVideo(), h(window).off("scroll." + e);
                    else
                        for (key in H) "function" == typeof H[key].pauseVideo && (H[key].pauseVideo(), h(window).off("scroll." + key))
            },
            playMp4Video: function (e) {
                var t = h("#" + e);
                ct(t);
                var i = t[0].play();
                void 0 !== i && i.then(function () { }).catch(function (e) {
                    t[0].setAttribute("controls", ""), t.closest(N.videoParent).attr("data-video-style", "unmuted")
                })
            },
            stopMp4Video: function (e) {
                if (e) h("#" + e)[0].pause();
                else
                    for (var t in L)
                        if ("mp4" === L[t].type) {
                            var i = h("#" + L[t].divId)[0];
                            "function" == typeof i.pause && i.pause()
                        }
            },
            createImageCarousels: function () {
                if (!this.$thumbSlider.length || h(this.selectors.photoThumbs).length < 2) {
                    var e = h(this.selectors.productImageMain).find(N.productVideo);
                    e.length && this.initVideo(e)
                } else {
                    this.settings.hasMultipleImages = !0;
                    var t = this.$mainSlider.find(".starting-slide"),
                        i = this._slideIndex(t);
                    this.$mainSlider.off("init"), this.$mainSlider.off("beforeChange"), this.$mainSlider.on("init", this.mainSlideInit.bind(this)), this.$mainSlider.on("beforeChange", this.beforeSlideChange.bind(this)), this.$thumbSlider.on("init", this.thumbSlideInit.bind(this));
                    var n = this.settings.thumbVertical = "beside" === this.$thumbSlider.data("position"),
                        a = this.settings.thumbArrows = this.$thumbSlider.data("arrows");
                    this.$mainSlider.slick({
                        adaptiveHeight: !n,
                        asNavFor: this.selectors.thumbSlider,
                        infinite: !1,
                        arrows: !1,
                        dots: !1,
                        swipe: !1,
                        initialSlide: i
                    }), this.$thumbSlider.slick({
                        asNavFor: this.selectors.mainSlider,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: a,
                        dots: !1,
                        vertical: n,
                        verticalSwiping: n,
                        focusOnSelect: !0,
                        infinite: !1,
                        customHeightMatching: !a && n,
                        customSlideAdvancement: !0,
                        initialSlide: i
                    }), AOS && AOS.refresh()
                }
            },
            destroyImageCarousels: function () {
                this.$mainSlider && this.settings.slickMainInitialized && (this.$mainSlider.slick("unslick"), this.settings.slickMainInitialized = !1), this.$thumbSlider && this.settings.slickThumbInitialized && (this.$thumbSlider.slick("unslick"), this.settings.slickThumbInitialized = !1), this.settings.slickMainInitialized = !1, this.settings.slickThumbInitialized = !1
            },
            mainSlideInit: function (e, t) {
                var i = t.$slider.find(N.currentSlide).find(N.productVideo);
                this.settings.slickMainInitialized = !0, i.length && this.initVideo(i)
            },
            thumbSlideInit: function (e, t) {
                this.settings.slickThumbInitialized = !0, this.settings.thumbArrows && this.$thumbSlider.on("setPosition", this.thumbSlideArrowVisibility.bind(this))
            },
            thumbSlideArrowVisibility: function (e, t) {
                var i = t.$slider,
                    n = i.find(".slick-arrow"),
                    a = !1;
                this.settings.thumbVertical ? i.find(".slick-track").height() >= i.height() && (a = !0) : i.find(".slick-track").width() >= i.width() && (a = !0), a ? n.removeClass("hide") : n.addClass("hide")
            },
            initVideo: function (e) {
                var t = e.data("video-type"),
                    i = e.attr("id");
                "mp4" === t && "muted" === L[i].style && this.playMp4Video(i), "youtube" === t && R && "muted" === L[i].style && this.requestToPlayYoutubeVideo(i), "vimeo" === t && (B ? this.playOrShowVimeo(i) : h("body").on("vimeoReady" + this.settings.namespace, function () {
                    this.playOrShowVimeo(i)
                }.bind(this))), this.inModal && this.resizeSlides()
            },
            stopVideo: function (e, t) {
                e || (this.stopYoutubeVideo(), this.stopVimeoVideo(), this.stopMp4Video()), "youtube" === t && this.stopYoutubeVideo(e), "mp4" === t && this.stopMp4Video(e), "vimeo" === t && this.stopVimeoVideo(e)
            },
            playOrShowVimeo: function (e) {
                L[e] && "muted" === L[e].style ? this.autoplayVimeoVideo(e) : L[e] && "unmuted" === L[e].style && ct(h("#" + e))
            },
            getVideoType: function (e) {
                return e.data("video-type")
            },
            getVideoId: function (e) {
                return e.attr("id")
            },
            beforeSlideChange: function (e, t, i, n) {
                var a = t.$slider,
                    o = a.find(N.currentSlide).find(".product__video"),
                    s = a.find('.slick-slide[data-slick-index="' + n + '"]').find(".product__video");
                if (i !== n && o.length) {
                    var r = this.getVideoType(o),
                        c = this.getVideoId(o);
                    c && this.stopVideo(c, r)
                }
                if (s.length) {
                    var d = this.getVideoType(s),
                        l = this.getVideoId(s);
                    l && "vimeo" === d && (B ? L[l] && "muted" === L[l].style && this.autoplayVimeoVideo(l) : h("body").on("vimeoReady" + this.settings.namespace, function () {
                        L[l] && "muted" === L[l].style && this.autoplayVimeoVideo(l)
                    }.bind(this))), l && "youtube" === d && (R ? L[l] && "muted" === L[l].style && this.requestToPlayYoutubeVideo(l, !0) : h("body").on("youTubeReady" + this.settings.namespace, function () {
                        L[l] && "muted" === L[l].style && this.requestToPlayYoutubeVideo(l, !0)
                    }.bind(this))), l && L[l] && "muted" === L[l].style && "mp4" === d && this.playMp4Video(l), l && L[l] && "muted" != L[l].style && ct(h("#" + l))
                }
            },
            resizeSlides: function () {
                this.settings.hasMultipleImages && (h(window).trigger("resize.slick"), setTimeout(function () {
                    this.$mainSlider && this.settings.slickMainInitialized && this.$mainSlider.slick("setPosition"), this.$thumbSlider && this.settings.slickThumbInitialized && this.$thumbSlider.slick("setPosition")
                }.bind(this), 500))
            },
            _slideIndex: function (e) {
                return e.data("index")
            },
            initQtySelector: function () {
                this.$container.find(".js-qty__wrapper").each(function () {
                    new theme.QtySelector(h(this), {
                        namespace: ".product"
                    })
                })
            },
            initAjaxProductForm: function () {
                "drawer" === theme.settings.cartType && new theme.AjaxProduct(h(this.selectors.formContainer))
            },
            openModalProduct: function () {
                if (!this.settings.modalInit) {
                    var e = h(this.selectors.modalFormHolder),
                        t = e.data("url");
                    t += "?view=ajax", e.load(t + " #AddToCartForm-" + this.sectionId, function () {
                        this.formSetup(), Shopify.PaymentButton && Shopify.PaymentButton.init()
                    }.bind(this)), this.productSetup(), this.loadModalContent(), this.createImageCarousels(), this.settings.modalInit = !0
                }
                this.resizeSlides()
            },
            closeModalProduct: function () {
                this.stopVideo(), h("body").off(this.settings.namespace), h(window).off(this.settings.namespace)
            },
            loadModalContent: function () {
                var e = this.checkIfVideos();
                e && -1 < e.indexOf("mp4") && this.$modal.find('.product__video[data-video-type="mp4"]').each(function (e, t) {
                    var i = h(t),
                        n = i.data("video-src"),
                        a = document.createElement("source");
                    a.setAttribute("src", n), i.append(a)
                }.bind(this))
            },
            onUnload: function () {
                this.$container.off(this.settings.namespace), h("body").off(this.settings.namespace), this.destroyImageCarousels()
            }
        }), dt), theme.Recommendations = (lt.prototype = h.extend({}, lt.prototype, {
            init: function () {
                var t = h(this.selectors.recommendations);
                if (t.length && !1 !== t.data("enable")) {
                    var e = t.find(this.selectors.placeholder),
                        i = t.data("product-id"),
                        n = "/recommendations/products?section_id=product-recommendations&limit=" + t.data("limit") + "&product_id=" + i;
                    e.load(n + this.selectors.sectionClass, function (e) {
                        theme.reinitProductGridItem(t), this.updateVariantInventory(t), 0 === h(e).find(this.selectors.sectionClass).find(this.selectors.productResults).length && t.addClass("hide")
                    }.bind(this))
                }
            },
            updateVariantInventory: function (e) {
                window.inventories = window.inventories || {}, e.find(".js-product-inventory-data").each(function () {
                    var e = h(this),
                        t = e.data("section-id");
                    window.inventories[t] = {}, h(".js-variant-inventory-data", e).each(function () {
                        var e = h(this);
                        window.inventories[t][e.data("id")] = {
                            quantity: e.data("quantity"),
                            incoming: e.data("incoming"),
                            next_incoming_date: e.data("date")
                        }
                    })
                })
            }
        }), lt), theme.Collection = (Y = !1, J = ".tags", G = ".parallax-container", W = "tag--active", ht.prototype = h.extend({}, ht.prototype, {
            init: function () {
                this.$container = h(this.container), this.sectionId = this.$container.attr("data-section-id"), this.sortBy(), this.sortTags(), this.initTagAjax()
            },
            initTagAjax: function () {
                this.$container.on("click" + this.namespace, ".tags a", function (e) {
                    var t = h(e.currentTarget);
                    if (!t.hasClass("no-ajax") && (e.preventDefault(), !Y)) {
                        Y = !0;
                        var i = t.attr("href");
                        h(J).find("." + W).removeClass(W), t.parent().addClass(W), history.pushState({}, "", i), h(".grid-product").addClass("unload"), this.getNewCollectionContent(i)
                    }
                }.bind(this))
            },
            getNewCollectionContent: function (e) {
                e += "?view=ajax", h("#CollectionAjaxResult").load(e + " #CollectionAjaxContent", function () {
                    Y = !1, this.reInit()
                }.bind(this))
            },
            sortBy: function () {
                var e = h("#SortBy");
                e.length && e.on("change", function () {
                    location.href = "?sort_by=" + h(this).val()
                })
            },
            sortTags: function () {
                var e = h("#SortTags");
                e.length && e.on("change", function () {
                    location.href = h(this).val()
                })
            },
            reInit: function () {
                for (var e = 0; e < sections.instances.length; e++) {
                    var t = sections.instances[e];
                    "collection-template" === t.type && t.forceReload()
                }
                theme.reinitProductGridItem()
            },
            forceReload: function () {
                this.onUnload(), this.init()
            },
            checkIfNeedReload: function () {
                Shopify.designMode && theme.settings.overlayHeader && (h(".header-wrapper").hasClass("header-wrapper--overlay") || location.reload())
            },
            onUnload: function () {
                h(window).off(this.namespace), this.$container.off(this.namespace), theme.parallaxSections[this.namespace] && (theme.parallaxSections[this.namespace].destroy(), delete theme.parallaxSections[this.namespace])
            }
        }), ht), theme.CollectionSwitcher = (K = ".collection-switcher__trigger", Z = ".collection-switcher__collection", X = ".collection-switcher__collection-grid", ut.prototype = h.extend({}, ut.prototype, {
            init: function () {
                this.$triggers = this.$container.find(K), this.$collections = this.$container.find(Z);
                var e = this.$container.find(X).first();
                e.length && (this.initSlider(e), h("body").on("matchSmall unmatchSmall", function () {
                    this.initSlider()
                }.bind(this))), this.$triggers.on("click", this.switch.bind(this))
            },
            initSlider: function (e) {
                this.$activeSlider && this.$activeSlider.off("afterChange").slick("unslick"), (e = e || this.$activeSlider).length && (theme.config.bpSmall ? (this.sliderArgs.slidesToShow = this.config.perRowMobile, this.sliderArgs.slidesToScroll = this.config.perRowMobile) : (this.sliderArgs.slidesToShow = parseInt(this.config.perRow), this.sliderArgs.slidesToScroll = parseInt(this.config.perRow)), this.$activeSlider = e.slick(this.sliderArgs), AOS && AOS.refresh())
            },
            switch: function (e) {
                e.preventDefault(), this.$triggers.removeClass("is-active");
                var t = h(e.currentTarget).addClass("is-active").attr("aria-controls"),
                    i = h("#" + t),
                    n = i.find(X);
                this.$collections.addClass("hide"), i.removeClass("hide"), this.initSlider(n)
            },
            onUnload: function () { }
        }), ut), theme.HeaderSection = (ee = "#NavDrawer", te = ".mobile-nav__toggle-btn", ie = ".mobile-nav__has-sublist", ne = "mobile-nav--expanded", pt.prototype = h.extend({}, pt.prototype, {
            initDrawers: function () {
                theme.NavDrawer = new theme.Drawers("NavDrawer", "nav"), "drawer" === theme.settings.cartType && new theme.CartDrawer, this.drawerMenuButtons()
            },
            drawerMenuButtons: function () {
                h(ee).find(".js-drawer-close").on("click", function (e) {
                    e.preventDefault(), theme.NavDrawer.close()
                });
                var e = h(te);
                e.attr("aria-expanded", "false"), e.each(function (e, t) {
                    var i = h(t);
                    i.attr("aria-controls", i.attr("data-aria-controls"))
                }), e.on("click", function () {
                    var e = h(this),
                        t = !1;
                    "true" === e.attr("aria-expanded") ? e.attr("aria-expanded", "false") : (e.attr("aria-expanded", "true"), t = !0), e.closest(ie).toggleClass(ne, t)
                })
            },
            onUnload: function () {
                theme.NavDrawer.close(), theme.headerNav.unload()
            }
        }), pt), theme.FeaturedContentSection = function () {
            h(".rte").find("a:not(:has(img))").addClass("text-link")
        }, theme.slideshows = {}, theme.SlideshowSection = (ae = ".parallax-container", mt.prototype = h.extend({}, mt.prototype, {
            init: function () {
                var e = {
                    arrows: h(this.slideshow).data("arrows"),
                    dots: h(this.slideshow).data("dots"),
                    fade: !!this.$container.data("parallax"),
                    speed: 500
                };
                theme.slideshows[this.slideshow] = new theme.Slideshow(this.slideshow, e)
            },
            forceReload: function () {
                this.onUnload(), this.init()
            },
            onUnload: function () {
                theme.parallaxSections[this.namespace] && (theme.parallaxSections[this.namespace].destroy(), delete theme.parallaxSections[this.namespace]), theme.slideshows[this.slideshow] && (theme.slideshows[this.slideshow].destroy(), delete theme.slideshows[this.slideshow])
            },
            onSelect: function () {
                h(this.slideshow).slick("slickPause")
            },
            onDeselect: function () {
                h(this.slideshow).slick("slickPlay")
            },
            onBlockSelect: function (e) {
                var t = h(this.slideshow),
                    i = h(".slideshow__slide--" + e.detail.blockId + ":not(.slick-cloned)").data("slick-index");
                t.slick("slickGoTo", i).slick("slickPause")
            },
            onBlockDeselect: function () {
                h(this.slideshow).slick("slickPlay")
            }
        }), mt), theme.VideoSection = (le = {
            byline: de = !(ce = {
                width: 1280,
                height: 720,
                playerVars: {
                    autohide: 0,
                    branding: 0,
                    cc_load_policy: 0,
                    controls: 0,
                    fs: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    playsinline: 1,
                    quality: "hd720",
                    rel: 0,
                    showinfo: 0,
                    wmode: "opaque"
                },
                events: {
                    onReady: function (e) {
                        var t = h(e.target.a),
                            i = t.attr("id");
                        re[i] = e.target;
                        re[i];
                        vt(t), re[i].mute(), t.attr("tabindex", "-1"), gt(i), h(window).on("scroll." + i, {
                            id: i
                        }, h.throttle(150, gt))
                    },
                    onStateChange: function (e) {
                        var t = h(e.target.a),
                            i = t.attr("id"),
                            n = re[i];
                        switch (e.data) {
                            case -1:
                                se[i].attemptedToPlay && (yt(t), bt(t));
                                break;
                            case 0:
                                n.playVideo();
                                break;
                            case 1:
                                yt(t);
                                break;
                            case 3:
                                se[i].attemptedToPlay = !0
                        }
                    }
                }
            }),
            title: !(re = []),
            portrait: !(se = []),
            loop: !0
        }, he = {
            videoParent: ".video-parent-section"
        }, ue = {
            loading: "loading",
            loaded: "loaded",
            interactable: "video-interactable"
        }, ft.prototype = h.extend({}, ft.prototype, {
            initYoutubeVideo: function () {
                se[this.youtubePlayerId] = {
                    id: this.youtubePlayerId,
                    videoId: this.youtubeVideoId,
                    type: "youtube",
                    attemptedToPlay: !1
                }, oe ? this.loadYoutubeVideo() : (window.loadYouTube(), h("body").on("youTubeReady" + this.namespace, this.loadYoutubeVideo.bind(this)))
            },
            loadYoutubeVideo: function () {
                var e = h.extend({}, ce, se[this.youtubePlayerId]);
                e.playerVars.controls = 0, re[this.youtubePlayerId] = new YT.Player(this.youtubePlayerId, e), oe = !0
            },
            initVimeoVideo: function () {
                se[this.vimeoPlayerId] = {
                    divId: this.vimeoPlayerId,
                    id: this.vimeoVideoId,
                    type: "vimeo"
                }, vt(h("#" + this.vimeoPlayerId)), this.$vimeoTrigger.on("click", +this.namespace, function (e) {
                    this.requestToPlayVimeoVideo(this.vimeoPlayerId)
                }.bind(this)), de ? this.loadVimeoVideo() : (window.loadVimeo(), h("body").on("vimeoReady" + this.namespace, this.loadVimeoVideo.bind(this)))
            },
            loadVimeoVideo: function () {
                var e = h.extend({}, le, se[this.vimeoPlayerId]);
                this.vimeoPlayer[this.vimeoPlayerId] = new Vimeo.Player(se[this.vimeoPlayerId].divId, e), de = !0, theme.config.bpSmall ? yt(h("#" + this.vimeoPlayerId)) : this.requestToPlayVimeoVideo(this.vimeoPlayerId)
            },
            requestToPlayVimeoVideo: function (e) {
                de ? this.playVimeoVideo(e) : h("body").on("vimeoReady" + this.namespace, function () {
                    this.playVimeoVideo(e)
                }.bind(this))
            },
            playVimeoVideo: function (e) {
                this.vimeoPlayer[e].play(), this.vimeoPlayer[e].setVolume(0), yt(h("#" + e))
            },
            onUnload: function (e) {
                var t = e.target.id.replace("shopify-section-", "");
                re["YouTubeVideo-" + t].destroy(), h(window).off("scroll" + this.namespace), h("body").off("vimeoReady" + this.namespace)
            }
        }), ft), theme.BackgroundImage = (pe = ".parallax-container", wt.prototype = h.extend({}, wt.prototype, {
            onUnload: function (e) {
                theme.parallaxSections[this.namespace].destroy(), delete theme.parallaxSections[this.namespace]
            }
        }), wt), theme.Testimonials = (fe = {
            accessibility: !(me = 0),
            arrows: !1,
            dots: !0,
            autoplay: !1,
            touchThreshold: 20,
            slidesToShow: 3,
            slidesToScroll: 3
        }, _t.prototype = h.extend({}, _t.prototype, {
            onUnload: function () {
                h(this.slider, this.wrapper).slick("unslick")
            },
            onBlockSelect: function (e) {
                var t = h(".testimonials-slide--" + e.detail.blockId + ":not(.slick-cloned)").data("slick-index");
                h(this.slider, this.wrapper).slick("slickGoTo", t)
            },
            init: function (e, t) {
                this.sliderActive && (e.slick("unslick"), this.sliderActive = !1), e.slick(t), this.sliderActive = !0, AOS && AOS.refresh()
            },
            a11y: function (e, t) {
                var i = t.$list,
                    n = h(this.wrapper, this.$container);
                i.removeAttr("aria-live"), n.on("focusin", function (e) {
                    n.has(e.target).length && i.attr("aria-live", "polite")
                }), n.on("focusout", function (e) {
                    n.has(e.target).length && i.removeAttr("aria-live")
                })
            }
        }), _t), theme.Instagram = (ge = !1, Ct.prototype = h.extend({}, Ct.prototype, {
            checkVisibility: function () {
                ge ? h(window).off("scroll" + this.namespace) : theme.isElementVisible(this.$container) && this.init()
            },
            init: function () {
                ge = !0;
                var e = this.$target.data("user-id"),
                    t = this.$target.data("client-id"),
                    i = parseInt(this.$target.data("count"));
                (this.feed = new InstafeedTheme({
                    target: this.$target[0],
                    accessToken: t,
                    get: "user",
                    userId: e,
                    limit: i + 2,
                    template: '<div class="grid__item small--one-half medium-up--one-fifth"><div class="image-wrap"><a href="{{link}}" target="_blank" style="background-image: url({{image}}); display: block; padding-bottom: 100%; background-size: cover; background-position: center;"></a></div></div>',
                    resolution: "standard_resolution"
                })).run(), this.$target.addClass("instagram-holder--active")
            }
        }), Ct), theme.NewsletterPopup = (St.prototype = h.extend({}, St.prototype, {
            initPopupDelay: function () {
                setTimeout(function () {
                    this.modal.open()
                }.bind(this), 1e3 * this.data.secondsBeforeShow);
            },
            closePopup: function (e) {
                if (this.data.testMode) Cookies.remove(this.cookieName, {
                    path: "/"
                });
                else {
                    var t = e ? 200 : this.data.daysBeforeReappear;
                    Cookies.set(this.cookieName, "opened", {
                        path: "/",
                        expires: t
                    })
                }
            },
            onLoad: function () {
                this.modal.open()
            },
            onSelect: function () {
                this.modal.open()
            },
            onDeselect: function () {
                this.modal.close()
            },
            onUnload: function () { }
        }), St), theme.FadingImages = (ve = "active-image", ye = "finished-image", be = "active-titles", we = "finished-titles", _e = "compensation", kt.prototype = h.extend({}, kt.prototype, {
            checkVisibility: function () {
                this.data.isInit ? h(window).off("scroll" + this.namespace) : theme.isElementVisible(this.$container) && (this.startImages(), this.startTitles(), this.data.isInit = !0)
            },
            nextImage: function () {
                var e = this.$container;
                this.data.removed_compensation || (e.find(".fading-images__item[data-slide-index=" + this.data.active_image + "]").removeClass(_e), this.data.removed_compensation = !0), e.find(".fading-images__item[data-slide-index=" + this.data.active_image + "]").removeClass(ve).addClass(ye);
                var t = this.data.active_image;
                window.setTimeout(function () {
                    e.find(".fading-images__item[data-slide-index=" + t + "]").removeClass(ye)
                }, this.data.finish_interval), this.data.active_image++, this.data.active_image > this.data.block_count && (this.data.active_image = 1), e.find(".fading-images__item[data-slide-index=" + this.data.active_image + "]").addClass(ve)
            },
            nextTitle: function () {
                var i = this.$container,
                    n = this.selectors.$allTitles;
                this.selectors.$allTitles.removeClass(be).addClass(we), this.data.active_title++, this.data.active_title > this.data.block_count && (this.data.active_title = 1);
                var a = this.data.active_title;
                window.setTimeout(function () {
                    var e = i.find(".fading-images__item[data-slide-index=" + a + "]").attr("data-slide-title1"),
                        t = i.find(".fading-images__item[data-slide-index=" + a + "]").attr("data-slide-title2");
                    i.find(".fading-images-overlay__title--1").text(e), i.find(".fading-images-overlay__title--2").text(t), n.removeClass(we).addClass(be)
                }, this.data.finish_interval - 200)
            },
            startImages: function () {
                this.$container.find(".fading-images__item[data-slide-index=" + this.data.active_image + "]").addClass(ve).addClass(_e);
                var e = this;
                window.setTimeout(function () {
                    window.setInterval(e.nextImage.bind(e), e.data.interval)
                }, this.data.timer_offset)
            },
            startTitles: function () {
                var i = this.$container,
                    n = this.selectors.$allTitles,
                    a = this.data.active_title;
                window.setTimeout(function () {
                    var e = i.find(".fading-images__item[data-slide-index=" + a + "]").attr("data-slide-title1"),
                        t = i.find(".fading-images__item[data-slide-index=" + a + "]").attr("data-slide-title2");
                    i.find(".fading-images-overlay__title--1").text(e), i.find(".fading-images-overlay__title--2").text(t), n.addClass(be)
                }, 750), window.setInterval(this.nextTitle.bind(this), this.data.interval)
            },
            onLoad: function () { },
            onSelect: function () { },
            onDeselect: function () { },
            onUnload: function () { }
        }), kt), theme.Maps = (Ce = 14, Se = null, ke = [], $e = {
            addressNoResults: theme.strings.addressNoResults,
            addressQueryLimit: theme.strings.addressQueryLimit,
            addressError: theme.strings.addressError,
            authError: theme.strings.authError
        }, Ie = '[data-section-type="map"]', Te = "[data-map]", Ve = "[data-map-overlay]", xe = "map-section--load-error", Pe = "map-section__error errors text-center", window.gm_authFailure = function () {
            Shopify.designMode && (h(Ie).addClass(xe), h(Te).remove(), h(Ve).after('<div class="' + Pe + '">' + theme.strings.authError + "</div>"))
        }, $t.prototype = h.extend({}, $t.prototype, {
            prepMapApi: function () {
                "loaded" === Se ? this.createMap() : (ke.push(this), "loading" !== Se && (Se = "loading", void 0 !== window.google && void 0 !== window.google.maps || h.getScript("https://maps.googleapis.com/maps/api/js?key=" + this.key).then(function () {
                    Se = "loaded", h.each(ke, function (e, t) {
                        t.createMap()
                    })
                })))
            },
            createMap: function () {
                var e, i, t, n, a = this.$map;
                return (e = a, i = h.Deferred(), t = new google.maps.Geocoder, n = e.data("address-setting"), t.geocode({
                    address: n
                }, function (e, t) {
                    t !== google.maps.GeocoderStatus.OK && i.reject(t), i.resolve(e)
                }), i).then(function (e) {
                    var t = {
                        zoom: Ce,
                        backgroundColor: "none",
                        center: e[0].geometry.location,
                        draggable: !1,
                        clickableIcons: !1,
                        scrollwheel: !1,
                        disableDoubleClickZoom: !0,
                        disableDefaultUI: !0
                    },
                        i = this.map = new google.maps.Map(a[0], t),
                        n = this.center = i.getCenter();
                    new google.maps.Marker({
                        map: i,
                        position: i.getCenter()
                    }), google.maps.event.addDomListener(window, "resize", h.debounce(250, function () {
                        google.maps.event.trigger(i, "resize"), i.setCenter(n), a.removeAttr("style")
                    }))
                }.bind(this)).fail(function () {
                    var e;
                    switch (status) {
                        case "ZERO_RESULTS":
                            e = $e.addressNoResults;
                            break;
                        case "OVER_QUERY_LIMIT":
                            e = $e.addressQueryLimit;
                            break;
                        case "REQUEST_DENIED":
                            e = $e.authError;
                            break;
                        default:
                            e = $e.addressError
                    }
                    Shopify.designMode && a.parent().addClass(xe).html('<div class="' + Pe + '">' + e + "</div>")
                })
            },
            checkVisibility: function () {
                theme.isElementVisible(this.$container, 600) && (this.prepMapApi(), h(window).off(this.namespace))
            },
            onUnload: function () {
                0 !== this.$map.length && google.maps.event.clearListeners(this.map, "resize")
            }
        }), $t), theme.Blog = (It.prototype = h.extend({}, It.prototype, {
            tagFilters: function () {
                var e = h("#BlogTagFilter");
                e.length && e.on("change", function () {
                    location.href = h(this).val()
                })
            },
            onUnload: function () { }
        }), It), theme.Photoswipe = (Oe = ".js-photoswipe__zoom", Me = ".photoswipe__image", Ae = ".slick-active .photoswipe__image", Tt.prototype = h.extend({}, Tt.prototype, {
            init: function () {
                var e = this.$container.find(Oe);
                this.$images = this.$container.find(Me);
                var i = [];
                e.on("click" + this.namespace, function (e) {
                    if (i = this.getImageData(), this.inSlideshow) var t = this.$container.find(Ae).data("index");
                    else t = h(e.currentTarget).data("index");
                    this.initGallery(i, t)
                }.bind(this))
            },
            getImageData: function () {
                var t = [];
                return this.$images.each(function () {
                    var e = {
                        msrc: h(this).prop("currentSrc") || h(this).prop("src"),
                        src: h(this).data("photoswipe-src"),
                        w: h(this).data("photoswipe-width"),
                        h: h(this).data("photoswipe-height"),
                        el: h(this)[0],
                        initialZoomLevel: .5
                    };
                    t.push(e)
                }), t
            },
            initGallery: function (n, e) {
                var t = document.querySelectorAll(".pswp")[0],
                    i = {
                        allowPanToNext: !1,
                        captionEl: !1,
                        closeOnScroll: !1,
                        counterEl: !1,
                        history: !1,
                        index: e - 1,
                        pinchToClose: !1,
                        preloaderEl: !1,
                        scaleMode: "zoom",
                        shareEl: !1,
                        tapToToggleControls: !1,
                        getThumbBoundsFn: function (e) {
                            var t = window.pageYOffset || document.documentElement.scrollTop,
                                i = n[e].el.getBoundingClientRect();
                            return {
                                x: i.left,
                                y: i.top + t,
                                w: i.width
                            }
                        }
                    };
                this.gallery = new PhotoSwipe(t, PhotoSwipeUI_Default, n, i), this.gallery.init(), this.gallery.listen("afterChange", this.afterChange.bind(this))
            },
            afterChange: function () {
                if (this.inSlideshow) {
                    var e = h("#ProductPhotos-" + this.sectionId);
                    if (e.hasClass("slick-initialized")) {
                        var t = this.gallery.getCurrentIndex();
                        e.slick("slickGoTo", t)
                    }
                }
            }
        }), Tt), theme.bp = {}, theme.bp.smallUp = 590, theme.bp.small = theme.bp.smallUp - 1, theme.config = {
            bpSmall: !1,
            hasSessionStorage: !0,
            mediaQuerySmall: "screen and (max-width: " + theme.bp.small + "px)",
            mediaQuerySmallUp: "screen and (min-width: " + theme.bp.smallUp + "px)",
            youTubeReady: !1,
            vimeoReady: !1,
            vimeoLoading: !1,
            isTouch: !!("ontouchstart" in window || window.DocumentTouch && window.document instanceof DocumentTouch || window.navigator.maxTouchPoints || window.navigator.msMaxTouchPoints),
            isIpad: /ipad/.test(window.navigator.userAgent.toLowerCase()) || "MacIntel" === window.navigator.platform && 1 < window.navigator.maxTouchPoints
        }, theme.config.isIpad && (document.documentElement.className += " js-ipad"), window.onYouTubeIframeAPIReady = function () {
            theme.config.youTubeReady = !0, h("body").trigger("youTubeReady")
        }, window.loadYouTube = function () {
            if (!theme.config.youtubeReady) {
                var e = document.createElement("script");
                e.src = "https://www.youtube.com/iframe_api";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }
        }, window.loadVimeo = function () {
            var e, t, i;
            if (!theme.config.vimeoLoading && !theme.config.vimeoReady) {
                theme.config.vimeoLoading = !0;
                var n = document.createElement("script");
                n.src = "https://player.vimeo.com/api/player.js";
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(n, a), (i = h.Deferred(), e = setInterval(function () {
                    Vimeo && (clearInterval(e), clearTimeout(t), i.resolve())
                }, 500), t = setTimeout(function () {
                    clearInterval(e), i.reject()
                }, 4e3), i).then(function () {
                    theme.config.vimeoReady = !0, theme.config.vimeoLoading = !1, h("body").trigger("vimeoReady")
                }).fail(function () { })
            }
        }, theme.init = function () {
            theme.setGlobals(), theme.pageTransitions(), theme.initQuickShop(), theme.videoModal(), theme.articleImages.init(), theme.customerTemplates.init(), theme.collapsibles.init(), slate.rte.init(), AOS.init({
                easing: "ease-out-quad",
                once: !0,
                offset: 60,
                disableMutationObserver: !0
            }), h(document.documentElement).on("keyup.tab", function (e) {
                9 === e.keyCode && (h(document.documentElement).addClass("tab-outline"), h(document.documentElement).off("keyup.tab"))
            })
        }, theme.setGlobals = function () {
            theme.config.hasSessionStorage = theme.isSessionStorageSupported(), theme.config.isTouch && h("body").addClass("supports-touch"), enquire.register(theme.config.mediaQuerySmall, {
                match: function () {
                    theme.config.bpSmall = !0, h("body").trigger("matchSmall")
                },
                unmatch: function () {
                    theme.config.bpSmall = !1, h("body").trigger("unmatchSmall")
                }
            })
        }, theme.loadImageSection = function (e) {
            function t() {
                e.removeClass("loading loading--delayed").addClass("loaded")
            }

            function i() {
                return e.find(".lazyloaded").length
            }
            if (e.find("svg").length) t();
            else if (0 < i()) t();
            else var n = setInterval(function () {
                0 < i() && (clearInterval(n), t())
            }, 80)
        }, theme.isSessionStorageSupported = function () {
            if (window.self !== window.top) return !1;
            var e = window.sessionStorage;
            try {
                return e.setItem("test", "1"), e.removeItem("test"), !0
            } catch (e) {
                return !1
            }
        }, theme.isElementVisible = function (e, t) {
            var i = e[0].getBoundingClientRect(),
                n = window.innerHeight || document.documentElement.clientHeight;
            return t = t || 0, 0 <= i.bottom && 0 <= i.right && i.top <= n + t && i.left <= (window.innerWidth || document.documentElement.clientWidth)
        }, theme.pageTransitions = function () {
            1 == h("body").data("transitions") && (navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) && h("a").on("click", function () {
                window.setTimeout(function () {
                    h("body").removeClass("unloading")
                }, 1200)
            }), h('a[href^="mailto:"], a[href^="#"], a[target="_blank"], a[href*="youtube.com/watch"], a[href*="youtu.be/"]').each(function () {
                h(this).addClass("js-no-transition")
            }), h("a:not(.js-no-transition)").bind("click", function (e) {
                if (e.metaKey) return !0;
                e.preventDefault(), h("body").addClass("unloading");
                var t = h(this).attr("href");
                window.setTimeout(function () {
                    location.href = t
                }, 50)
            }), h("a.mobile-nav__link").bind("click", function () {
                theme.NavDrawer.close()
            }))
        }, theme.reinitProductGridItem = function (e) {
            AOS && AOS.refreshHard(), theme.settings.currenciesEnabled && theme.currencySwitcher.ajaxrefresh(), theme.initQuickShop(!0), window.SPR && (SPR.initDomEls(), SPR.loadBadges()), sections.register("product-template", theme.Product, e), theme.collapsibles.init()
        }, window.onpageshow = function (e) {
            e.persisted && h("body").removeClass("unloading")
        }, h(document).ready(function () {
            theme.init(), window.sections = new theme.Sections, sections.register("header-section", theme.HeaderSection), sections.register("slideshow-section", theme.SlideshowSection), sections.register("video-section", theme.VideoSection), sections.register("product", theme.Product), sections.register("product-recommendations", theme.Recommendations), sections.register("product-template", theme.Product), sections.register("collection-template", theme.Collection), sections.register("featured-content-section", theme.FeaturedContentSection), sections.register("collection-switcher", theme.CollectionSwitcher), sections.register("testimonials", theme.Testimonials), sections.register("instagram", theme.Instagram), sections.register("newsletter-popup", theme.NewsletterPopup), sections.register("fading-images", theme.FadingImages), sections.register("background-image", theme.BackgroundImage), sections.register("map", theme.Maps), sections.register("blog", theme.Blog), sections.register("photoswipe", theme.Photoswipe)
        })
    }(theme.jQuery), window.jQuery(document).ready(function () {
        window.jQuery(".add-to-cart").click(function () {
            setTimeout(function () {
                window.jQuery(".cart-link").load(location.href + " .cart-link", "")
            }, 1500)
        }), window.jQuery("body").on("click", "button.js-qty__adjust--minus", function () {
            setTimeout(function () {
                window.jQuery(".cart-link").load(location.href + " .cart-link", "")
            }, 1e3)
        }), window.jQuery("body").on("click", "button.js-qty__adjust--plus", function () {
            setTimeout(function () {
                window.jQuery(".cart-link").load(location.href + " .cart-link", "")
            }, 1e3)
        })
    }), window.jQuery(document).ready(function () {
        window.jQuery(".cart-link").click(function () {
            jQuery("#kustomer-root").attr("style", "display:none !important")
        })
    }), window.jQuery(document).ready(function () {
        window.jQuery(".icon-close").click(function () {
            jQuery("#kustomer-root").attr("style", "display:block !important")
        })
    });

    // CODE FOR THE WINDOW TO SCROLL TO TOP WHEN NEW PAGE IS CLICKED ON PLP
    (() => {
        window.onload = function () {
            const btnWrapper = document.querySelector(".boost-pfs-filter-bottom-pagination");
            btnWrapper.addEventListener("click", function(e) {
                console.log(e.target);
                if (e.target.classList.contains('plpScrollToTop')) {
                    window.scrollTo({top: 0, behavior:'smooth'});
                } else {
                  return; 
                }
            });
        }
    })();

    
