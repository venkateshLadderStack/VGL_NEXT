import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useRouter } from "next/router";

const SearchInput = ({ classes }) => {
  const [value, setValue] = React.useState("");
  const router = useRouter();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <form
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          // TODO: do something with form values
          router.push(`/search?s=${value}`);
        }}
      >
        <div className={classes.navSearchContainer}>
          <label className="sr-only" htmlFor="inlineFormInputGroup">
            Search
          </label>
          <div className="input-group">
            <div
              className="input-group-prepend"
              style={{
                maxWidth: 36,
              }}
            >
              <div className={`input-group-text ${classes.searchIcon}`}>
                <SearchIcon style={{ color: "rgba(0,0,0,0.5)" }} />
              </div>
            </div>
            <input
              type="text"
              className={`form-control ${classes.input}`}
              name="s"
              id="inlineFormInputGroup"
              placeholder="What you are looking for?"
              onChange={handleChange}
              value={value}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
