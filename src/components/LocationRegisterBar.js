import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

function LocationBar(props) {
  const { formValues, setFormValues } = props;
  const [address, setAddress] = useState("");

  const handleSelect = async (value) => {
    setFormValues({
      ...formValues,
      location: value,
    });
    setAddress(value);
  };

  return (
    <div style={{ width: "30rem" }}>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        style={{ width: "100%" }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div className="m-auto" style={{ width: "100%" }}>
              <div
                className="d-flex justify-content-between"
                style={{ width: "100%" }}
              >
                <input
                  {...getInputProps({
                    placeholder: "Type Address",
                  })}
                  style={{
                    width: "100%",
                    height: "2.25rem",
                    border: "1px solid #767676",
                    borderRadius: "2px",
                  }}
                />
              </div>

              <div
                style={{
                  zIndex: "3",
                  position: "absolute",
                  paddingTop: "2px",
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                {loading ? (
                  <div style={{ backgroundColor: "white", width: "100%" }}>
                    ...Loading
                  </div>
                ) : null}

                {suggestions.map((suggestion, i) => {
                  const style = {
                    zIndex: "2",
                    width: "30rem",
                    cursor: suggestion.active ? "pointer" : null,
                    backgroundColor: suggestion.active ? "#d3d3d3" : "#f2f2f2",
                  };
                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </PlacesAutocomplete>
    </div>
  );
}

export default LocationBar;
