var exitPopupText="*******************************************\r\nAre you sure you don't want to take advantage of this time-sensitive giveaway? Don't forget - this is not yet available in stores but this trial is available for you today.\r\n\r\nYour sample will arrive in just a few days and include a full 30 day supply. Don't miss out on this opportunity. See what this miracle formula can do for you! \r\n*******************************************",_exit=!1;!function(t){t(document).ready(function(){window.onbeforeunload=function(){if(!_exit)return _exit=!0,t("#exitpopup-overlay").show(),exitPopupText},t("a").click(function(){_exit=!0})})}(jQuery);