import Html exposing (text)
import List exposing (partition, append)

-- Right here let's us display the results in an HTML file
main =
  text toString <| quicksort [-1, 100, -2, -4433, 10, 4, 19]

-- Elm is a functional language, so we recursively quicksort without
-- assignment or variables.

quicksort: List comparable -> List comparable
quicksort list =
    case list of
        [] -> []
        pivot :: rest ->
            let
                (lesser, greater) = partition (\x -> x < pivot) rest
            in
                (quicksort lesser) ++ [pivot] ++ (quicksort greater)
