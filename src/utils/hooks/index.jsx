import { useContext } from 'react'
import {IdContext, SourceContext, DataContext } from '../context'

export function useSource() {
    const { source, toggleSource } = useContext(SourceContext)
    return { source, toggleSource }
}
export function useId() {
  const { id, toggleId } = useContext(IdContext)
  return { id, toggleId }
}
export function useData() {
  const { data, dataActivity, dataSessions, dataPerformance, toggleData } = useContext(DataContext)
  return { data, dataActivity, dataSessions, dataPerformance, toggleData}
}