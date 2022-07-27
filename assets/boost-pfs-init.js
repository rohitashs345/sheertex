var boostPFS = new BoostPFS();
boostPFS.init();
if (typeof boostPFSConfig != 'undefined'
    && typeof boostPFSConfig.general != 'undefined'
    && typeof boostPFSConfig.general.isInitFilter != 'undefined'
    && typeof boostPFSThemeConfig != 'undefined'
    && boostPFSConfig.general.isInitFilter === true) {
    if (Utils.isMobile()) {
        Settings.general.paginationType = "default"
    }
    boostPFS.initFilter();
}
BoostPFS.jQ(window).on('load', function () {
    boostPFS.initSearchBox();
    boostPFS.initAnalytics();
});