import { useContext} from "react";
import { SourceContext} from '../context'

export function useSource() {
    const { source, toggleSource } = useContext(SourceContext)
    return { source, toggleSource }
}