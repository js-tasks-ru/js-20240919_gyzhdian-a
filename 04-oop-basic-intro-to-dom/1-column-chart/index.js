export default class ColumnChart {
    element;
    chartHeight = 50

    constructor(props = {}) {
      const {data = [], label = '', value = 0, link = '', formatHeading = (value)=>value} = props;
      this.data = data;
      this.label = label;
      this.value = value;
      this.link = link;
      this.formatHeading = formatHeading;
      this.element = this.createElement();
    }

    createTitle() {
      const link = this.link ? `<a href="${this.link}" class="column-chart__link">View all</a>` : '';
      return [this.label, link].join();
    }

    getColumnsProps(data) {
      const maxValue = Math.max(...data);
      const scale = this.chartHeight / maxValue;
      return data.map(item => {
        return {
          percent: (item / maxValue * 100).toFixed(0) + '%',
          value: String(Math.floor(item * scale))
        };
      });
    }

    createChartTemplate() {
      return this.getColumnsProps(this.data).map(({percent, value}) => `<div style="--value: ${value}" data-tooltip="${percent}"></div>`).join('');
    }

    createTemplate() {
      return `
        <div class="column-chart column-chart_loading "  style="--chart-height: ${this.chartHeight}">
      <div class="column-chart__title">
        ${this.createTitle()}
      </div>
      <div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.formatHeading(this.value)}</div>
        <div data-element="body" class="column-chart__chart">
          ${this.createChartTemplate()}
        </div>
      </div>
    </div>
        `;
    }

    createElement() {
      const element = document.createElement('div');
      element.innerHTML = this.createTemplate();
      return element.firstElementChild;
    }

    update(newData) {
      this.data = newData;
      this.element.querySelector("[data-element='body']").innerHTML = this.createChartTemplate();
    }

    remove() {return this.element.remove();}

    destroy() {return this.remove();

    }
}
