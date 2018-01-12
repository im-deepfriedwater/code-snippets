import Html exposing (text)
import List exposing (partition, append)

main =
  text toString <| quicksort [-1, 100, -2, -4433, 10, 4, 19]

-- Elm is a functional language, so we recursively quicksort without
-- assignment or variables.

quicksort: List number -> List number
quicksort list =
    case list of
        [] -> list
        pivot :: rest ->
            let
                (lesser, greater) = partition (\x -> x < (toInt pivot)) rest
            in
                (quicksort lesser) ++ pivot ++ (quicksort greater)
