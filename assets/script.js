function calculateDifference() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // getMonth() 返回 0-11，所以要加1
    const currentDay = now.getDate();
    // 获取用户输入的开始日期
    let startYear = parseInt(document.getElementById('start-year').value);
    let startMonth = parseInt(document.getElementById('start-month').value);
    let startDay = parseInt(document.getElementById('start-day').value);

    // 获取用户输入的结束日期，这里调用系统时间
    let endYear = currentYear;
    let endMonth = currentMonth;
    let endDay = currentDay;

    // 创建日期对象
    let startDate = new Date(startYear, startMonth - 1, startDay);
    let endDate = new Date(endYear, endMonth - 1, endDay);

    // 计算差值
    let yearDiff = endYear - startYear;
    let monthDiff = endMonth - startMonth;
    let dayDiff = endDay - startDay;

    // 调整差值
    if (dayDiff < 0) {
        monthDiff--;
        dayDiff += new Date(endYear, endMonth - 1, 0).getDate(); // 获取上一个月的天数
    }
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    // 显示结果
    document.getElementById('result').textContent = `我已经喜欢饶子言：${yearDiff}年 ${monthDiff}月 ${dayDiff}天了。`;
}
