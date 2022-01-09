import { SortData, TableData } from '../forms/Table'
import {
  CURRENCY_FORMAT_MATCHER_REGEX,
  DATE_FORMAT_MATCHER_REGEX,
  TABLE_EXPORT_KEY_FOR_TITLE,
  TABLE_EXPORT_KEYS_TO_AVOID,
  TABLE_SORT_DIRECTION_ASCENDING,
  TABLE_SORT_DIRECTION_DESCENDING,
  TABLE_SORTED_ASC_CODE,
  TABLE_SORTED_DESC_CODE,
  TABLE_SORTED_NONE_CODE,
} from '../../constants'

interface CsvHeaders {
  label: string
  key: string
}

type CsvData = Record<string, string>

interface CsvReport {
  headers: CsvHeaders[]
  data: CsvData[]
  filename: string
}

export function getCsvReport(tableHeaders: string[], tableData: TableData[], tableFilename?: string): CsvReport {
  const tableDataKeys = Object.keys(tableData[0]) as Array<string>

  return {
    headers: getHeaders(tableHeaders, tableDataKeys),
    data: getData(tableData, tableDataKeys),
    filename: tableFilename ? tableFilename : 'download.csv',
  }
}

function getHeaders(tableHeaders: string[], tableDataKeys: string[]): CsvHeaders[] {
  const csvHeaders: CsvHeaders[] = []

  tableHeaders.forEach((header, index) => {
    !TABLE_EXPORT_KEYS_TO_AVOID.includes(tableDataKeys[index]) &&
      csvHeaders.push({
        label: header,
        key: tableDataKeys[index],
      })
  })

  return csvHeaders
}

function getData(tableData: TableData[], tableDataKeys: string[]): CsvData[] {
  const csvData: CsvData[] = []

  tableData.forEach((data) => {
    const dataItem: CsvData = {}
    tableDataKeys.forEach((key) => {
      if (!TABLE_EXPORT_KEYS_TO_AVOID.includes(key)) {
        dataItem[key] = getDataItemValue(data[key])
      }
    })
    csvData.push(dataItem)
  })

  return csvData
}

function getDataItemValue(dataItem: string | JSX.Element): string {
  let dataItemValue = ''
  if (typeof dataItem === 'string') {
    dataItemValue = dataItem.toString()
  } else {
    {
      //if (Object.prototype.hasOwnProperty.call(dataItem, 'props')) {
      for (const [key, value] of Object.entries(dataItem)) {
        if (key === 'props' && value[TABLE_EXPORT_KEY_FOR_TITLE]) {
          dataItemValue = value[TABLE_EXPORT_KEY_FOR_TITLE]
        }
      }
    }
  }

  return dataItemValue
}

export function getSortData(currentSortData: SortData, header: string, index: number, tableData: TableData): SortData {
  if (header && tableData) {
    let sortDirection = TABLE_SORT_DIRECTION_ASCENDING
    let sortedDirection = TABLE_SORTED_ASC_CODE
    if (
      currentSortData &&
      currentSortData.index === index &&
      currentSortData.sortDirection === TABLE_SORT_DIRECTION_ASCENDING
    ) {
      sortDirection = TABLE_SORT_DIRECTION_DESCENDING
      sortedDirection = TABLE_SORTED_DESC_CODE
    }

    const sortKey = Object.keys(tableData)[index]

    return {
      header,
      index,
      sortKey,
      sortDirection,
      sortedDirection,
    }
  }

  return { sortKey: '', sortedDirection: TABLE_SORTED_NONE_CODE }
}

export function getSortedData(sortData: SortData, tableData: TableData[]): TableData[] {
  if (sortData && sortData.sortKey && tableData) {
    tableData.sort((a, b) => {
      const first = getSortTableData(a[sortData.sortKey])
      const second = getSortTableData(b[sortData.sortKey])
      if (first > second) {
        return sortData.sortDirection === TABLE_SORT_DIRECTION_ASCENDING ? 1 : -1
      }
      if (first < second) {
        return sortData.sortDirection === TABLE_SORT_DIRECTION_ASCENDING ? -1 : 1
      }
      return 0
    })
  }

  return tableData
}

function getSortTableData(sortDataKey: string | JSX.Element): string | number {
  if (typeof sortDataKey === 'string') {
    if (CURRENCY_FORMAT_MATCHER_REGEX.test(sortDataKey)) {
      return parseInt(sortDataKey.replace('$', '').replaceAll(',', ''))
    } else if (DATE_FORMAT_MATCHER_REGEX.test(sortDataKey)) {
      return parseInt(sortDataKey.replaceAll('-', ''))
    } else {
      return sortDataKey
    }
  } else {
    for (const [key, value] of Object.entries(sortDataKey)) {
      if (key === 'props' && value[TABLE_EXPORT_KEY_FOR_TITLE]) {
        return value[TABLE_EXPORT_KEY_FOR_TITLE].toString()
      }
    }
  }

  return ''
}
