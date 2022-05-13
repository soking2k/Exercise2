const columnDefs = [
  
    
      { field: 'athlete', filter: 'agTextColumnFilter', minWidth: 200 },
      { field: 'age' },
      { field: 'country', minWidth: 200 },
      { field: 'country', minWidth: 200 },
      { field: 'country', minWidth: 200 },
      { field: 'country', minWidth: 200 },
      { field: 'country', minWidth: 200 },
      { field: 'country', minWidth: 200 },

  
];

const gridOptions = {

  columnDefs: columnDefs,
  
  pagination: true,
  paginationPageSize: 25,

  sideBar: {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
          toolPanelParams: {
          suppressRowGroups: true,
          suppressValues: true,      
          },
        },
      ],
      defaultToolPanel: 'columns',
    },
};
function showPivotModeSection() {
  var columnToolPanel = gridOptions.api.getToolPanelInstance('columns');
  columnToolPanel.setPivotModeSectionVisible(true);
}

function showRowGroupsSection() {
  var columnToolPanel = gridOptions.api.getToolPanelInstance('columns');
  columnToolPanel.setRowGroupsSectionVisible(true);
}

function showValuesSection() {
  var columnToolPanel = gridOptions.api.getToolPanelInstance('columns');
  columnToolPanel.setValuesSectionVisible(true);
}

function showPivotSection() {
  var columnToolPanel = gridOptions.api.getToolPanelInstance('columns');
  columnToolPanel.setPivotSectionVisible(true);
}
// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then((response) => response.json())
    .then((data) => gridOptions.api.setRowData(data));
});