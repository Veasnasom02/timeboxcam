const switchLanguage = () => {
    const selectedLang = document.getElementById('language-select').value;

    const elementsToTranslate = {
      title: ['DAILY TIMEBOXING PLANNER', 'ផែនការប្រចាំថ្ងៃ'],
      'date-label': ['DATE :', 'កាលបរិច្ឆេទ :'],
      'top-priorities-title': ['TOP PRIORITIES :', 'កិច្ចការសំខាន់ៗ និងអាទិភាព :'],
      'brain-dump-title': ['BRAIN DUMP', 'សរសេរចូលរាល់កិច្ចការដែលចង់ធ្វើនៅថ្ងៃនេះ'],
      'time-column': ['Time', 'ម៉ោង'],
      'task-column': ['Task', 'ភារៈកិច្ច'],
      'done-column': ['Done', 'បានសម្រេច'],
      'summary-title': ['SUMMARY', 'សង្ខេប'],
      topPrioritiesPlaceholder: ['Enter your top priorities here...', 'សូមបញ្ចូលកិច្ចការសំខាន់ៗនៅទីនេះ...'],
      brainDumpPlaceholder: ['Write down any other thoughts or tasks here...', 'សូមសរសេរចំណាំ ឬកិច្ចការដែលមាននៅទីនេះ...']
    };

    for (const id in elementsToTranslate) {
      if (id === 'topPrioritiesPlaceholder') {
        document.getElementById('top-priorities').placeholder = selectedLang === 'en' 
          ? elementsToTranslate[id][0] 
          : elementsToTranslate[id][1];
      } else if (id === 'brainDumpPlaceholder') {
        document.getElementById('brain-dump').placeholder = selectedLang === 'en' 
          ? elementsToTranslate[id][0] 
          : elementsToTranslate[id][1];
      } else {
        document.getElementById(id).textContent = selectedLang === 'en' 
          ? elementsToTranslate[id][0] 
          : elementsToTranslate[id][1];
      }
    }

    document.body.classList.toggle('khmer-font', selectedLang === 'kh');
  };