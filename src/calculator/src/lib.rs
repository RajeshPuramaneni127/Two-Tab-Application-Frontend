use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn evaluate(expression: &str) -> String {
    match meval::eval_str(expression) {
        Ok(result) => result.to_string(),
        Err(_) => "Error".to_string(),
    }
}
