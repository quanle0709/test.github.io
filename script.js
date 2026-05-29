const toggleButton = document.getElementById('toggleActivities');
const activitiesList = document.getElementById('activities');

toggleButton.addEventListener('click', () => {
    activitiesList.classList.toggle('hidden');
});