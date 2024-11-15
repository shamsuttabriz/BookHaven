import { toast } from "react-toastify";

const getStoredReadList = () => {
    // read-list
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        // already exists. do no add it
        toast.warning('Already exists in the read list');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast.success('Successfully added book');
    }
}

const getStoredWishList = () => {
    const storedWishList = localStorage.getItem('wish-list');

    if (storedWishList) {
        const storedWishListStr = JSON.parse(storedWishList);
        return storedWishListStr;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredReadList();

    if (storedWishList.includes(id)) {
        toast.warning(id, 'Already added the book in Wishlist');
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast.success("Successfully added book in the list");
    }
}

export { addToStoredReadList, addToStoredWishList, getStoredReadList };

