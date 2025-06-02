import { Pagination } from "@mui/material";

const CardPagination = () => {
    return (
        <div className="flex justify-center items-center mt-10">
            <Pagination
                count={10}
                variant="outlined"
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: '#e11d48', // Tailwind rose-600
                        borderColor: '#e11d48',
                    },
                    '& .MuiPaginationItem-root.Mui-selected': {
                        backgroundColor: '#e11d48',
                        color: '#fff',
                        borderColor: '#e11d48',
                    },
                    '& .MuiPaginationItem-root:hover': {
                        backgroundColor: '#fda4af', // Tailwind rose-300
                    },
                }}
            />
        </div>
    );
};

export default CardPagination;