// Show the latest published-source commit date, not the visitor's current date.
fetch('https://api.github.com/repos/zhzhen0626/zhzhen0626.github.io/commits/main', {
  headers: { Accept: 'application/vnd.github+json' }
})
  .then((response) => {
    if (!response.ok) throw new Error('Commit date unavailable');
    return response.json();
  })
  .then((data) => {
    const timestamp = data.commit?.committer?.date;
    const date = new Date(timestamp);
    if (!timestamp || Number.isNaN(date.getTime())) return;
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Shanghai', day: '2-digit', month: '2-digit', year: 'numeric'
    }).formatToParts(date);
    const value = (type) => parts.find((part) => part.type === type).value;
    const element = document.getElementById('last-updated');
    element.textContent = `${value('day')}/${value('month')}/${value('year')}`;
    element.dateTime = `${value('year')}-${value('month')}-${value('day')}`;
  })
  .catch(() => { /* Retain the date embedded in HTML when GitHub is unavailable. */ });
