function sysclock(uptime) {
    if (uptime < 60) {
        var second = uptime + 's';
        return second;
    } else if (upptime >= 60 && uptime < 3600) {
        var minute = Match.floor(uptime / 60) + 'min' + Math.floor(uptime % 60) + 's';
        return minute;
    } else {
        var hour = Math.floor(uptime / 3600) + 'h' + Math.floor(uptime % 3600 / 60) + 'min' + Math.floor(uptime % 60) + 's';
        return hour;
    }
}

exports.print = sysclock;